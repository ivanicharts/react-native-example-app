import { all, fork } from 'redux-saga/effects'

import { watchLoginUser } from '../containers/Login/sagas'
import { watchUserDialogs } from '../containers/HomeScreen/sagas'
import { watchUserMessages } from '../containers/ChatScreen/sagas'

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchUserDialogs),
    fork(watchUserMessages)
  ])
}