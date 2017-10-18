import { call, select, takeLatest, takeEvery, put } from 'redux-saga/effects'
import { get } from 'redux-saga/utils'

import { makeSelectUser } from './selectors'
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
  } catch (e) {
    console.log('getUserDialogs error', e, e.response, e.request )
    // yield put(a.getUserDialogsFail(response && response.data.error && response.data.error.message || 'Something went wrong'))
  }
}

export function* watchUserDialogs () {
  yield takeLatest(t.GET_USER_DIALOGS, getUserDialogs)
}