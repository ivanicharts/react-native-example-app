import { call, select, takeLatest, takeEvery, put } from 'redux-saga/effects'
import { get } from 'redux-saga/utils'

// import { makeSelectUserMessage } from './selectors'
import * as a from './actions'
import { api } from '../../services/api'
import * as t from './actionTypes'

function* sendMessage ({ dialogId, message, ...rest }) {
  const url = `api/dialogs/${dialogId}/message`

  try {
    // const text = yield select(makeSelectUserMessage)
    console.log('textSaga', message, rest)
    const response = yield call(api.post, url, { text: message })
    console.log('message sent', response)
  } catch (e) {
    console.log('sendMessage error', e, e.response, e.request, url)
  }
}

export function* watchUserMessages () {
  yield takeLatest(t.ADD_NEW_MESSAGE, sendMessage)
}