import * as t from './actionTypes'

const defaultState = {
  isFetching: true,
  dialogs: []
}

function dialogsReducer (state = defaultState, { type, ...action }) {
  switch(type) {
  case t.GET_USER_DIALOGS_SUCCESS:
    return { isFetching: false, dialogs: action.dialogs }
  case t.GET_USER_DIALOGS_FAIL:
    return { isFetching: false, dialogs: [] }
  case t.GET_USER_DIALOGS_REQUEST:
    return { ...state, isFetching: true }
  default:
    return state
  }
}

export default dialogsReducer