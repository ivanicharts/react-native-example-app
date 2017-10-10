import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './createReducer'
import rootSaga from './createRootSaga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore () {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  return store
}
