import { call, select, takeLatest, takeEvery, put } from 'redux-saga/effects'
import { get } from 'redux-saga/utils'

import { makeSelectUser, makeSelectDialogs } from './selectors'
import * as a from './actions'
import { api } from '../../services/api'
import * as t from './actionTypes'
import Storage from '../../services/storage'

function* getUserDialogs () {
  const url = 'api/dialogs'
  
  try {
    yield put(a.getUserDialogsRequest())
    const { userId } = yield select(makeSelectUser)
    
    const params = {
      filter: JSON.stringify({ members: userId, members: "include" })
    }

    const { data } = yield call(api, url, { params })
    console.log('data', data)
    const dialogs = data.map(dialog => ({
      data: dialog,
      messages: dialog.messages ? dialog.messages : [],
      name: dialog.members.filter(m => m.id !== userId)[0].username,
      message: dialog.messages ? dialog.messages[dialog.messages.length - 1].text : '',
      avatar: 'https://cdn.dribbble.com/users/40016/screenshots/1358207/bats_1x.png',
      time: '11:11',
      isOnline: false
    }))
    yield put(a.getUserDialogsSuccess(dialogs))
    yield put(a.getUsersList())
  } catch (e) {
    console.log('getUserDialogs error', e, e.response, e.request )
    // yield put(a.getUserDialogsFail(response && response.data.error && response.data.error.message || 'Something went wrong'))
  }
}

function* getUsersList () {
  const url = 'api/users'

  try {
    yield put(a.getUsersListRequest())
    const dialogs = yield select(makeSelectDialogs)
    const { userId } = yield select(makeSelectUser)
    console.log('userId', userId)
    const existingDialogsUsersId = dialogs
      .map(e => e.data.members.map(e => e.id).filter(e => e !== userId))
      .reduce((acc, xs) => (acc.push(...xs), acc) , [])

    const params = {
      filter: JSON.stringify({
        where: {
          id: { nin: [userId, ...existingDialogsUsersId] } 
        }
      })
    }

    console.log('existingDialogsUsersId', dialogs, existingDialogsUsersId)
    const response = yield call(api, url, { params })
    yield put(a.getUsersListSuccess(response.data))
    console.log('users success', response.data)
  } catch (e) {
    console.log('user fail', e)
  }
}

function* createDialog ({ id }) {
  const url = 'api/dialogs'

  try {
    const { userId } = yield select(makeSelectUser)
    const body = { members: [ userId, id ] }
    const response = yield call(api.post, url, body)
    yield put({ type: t.CREATE_DIALOG_SUCCESS, id })
    yield put({ type: t.GET_USER_DIALOGS })
    console.log('createDialog', response)

  } catch (e) {
    console.log('createDialog eeer', e)
  }
}

export function* watchUserDialogs () {
  yield takeLatest(t.GET_USER_DIALOGS, getUserDialogs)
  yield takeLatest(t.GET_USERS_LIST, getUsersList)
  yield takeLatest(t.CREATE_DIALOG, createDialog)
}