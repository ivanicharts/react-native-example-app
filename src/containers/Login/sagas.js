import { call, select, takeLatest, takeEvery } from 'redux-saga/effects'

import { selectCredentials, selectField } from './selectors'
import * as a from './actions'
import api from '../../services/api'
import * as t from './actionTypes'

// function* changeCredentials (field) {
//   const value = select(selectField(field))

//   try {
//     yield put(a.changeCredentials({ field, value }))
//   } catch (e) {
//     console.log('ERROR CHANGE C', e)
//   }
// }

// function* watchChangeCredentials () {
//   yield takeLatest(t.CREDENTIALS_CHANGE_EVENT, changeCredentials)
// }

function* loginUser () {
  console.log('Login attempt')
  const data = select(selectCredentials())
  const url = 'https://api.qa.taxifine.md/admin/login'
  
  try {
    console.log('Login attempt')
    const response = yield call(api, url, { params: { ...data } })
    console.log('Login attempt success', response)
    yield put(loginSuccess(response))
  } catch (err) {
    console.log('ERROR LOGIN', err)
  }
}

export function* watchLoginUser () {
  console.log('watchLoginUser', t.LOGIN)
  yield takeEvery(t.LOGIN, loginUser)
}