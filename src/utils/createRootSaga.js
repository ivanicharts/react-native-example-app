import { all, fork } from 'redux-saga/effects'

import { watchLoginUser } from '../containers/Login/sagas'

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser)
  ])
}