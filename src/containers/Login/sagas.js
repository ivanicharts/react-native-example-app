import { call, select, takeLatest, takeEvery, put } from 'redux-saga/effects'
import { get } from 'redux-saga/utils'

import { selectCredentials, selectField } from './selectors'
import * as a from './actions'
import { api } from '../../services/api'
import * as t from './actionTypes'
import Storage from '../../services/storage'
import { injectToken } from '../../services/api'

function* loginUser () {
  const url = 'api/users/login'
  
  console.log('Login user')

  try {
    const body = yield select(selectCredentials)
    const response = yield call(api.post, url, {...body})
    Storage.setToken(response.data.id)
    injectToken(response.data.id)
    yield put(a.loginSuccess(response.data))
  } catch ({ response, request }) {
    yield put(a.loginFail(response && response.data.error && response.data.error.message || 'Something went wrong'))
  }
}

function* checkToken () {
  const url = 'api/users/me'
  const token = yield Storage.getToken() 
  console.log('first token', token)
  if (token === null)
    return yield put(a.invalidToken())

  try {
    const response = yield call(api, url)
    console.log('response', response)
    yield put(a.loginSuccess(response.data))
  } catch (err) {
    console.log(err.request)
    yield put(a.invalidToken())
  }
}

export function* watchLoginUser () {
  yield takeLatest(t.LOGIN, loginUser)
  yield takeLatest(t.CHECK_TOKEN, checkToken)
}