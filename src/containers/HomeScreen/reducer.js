import * as t from './actionTypes'
import { ADD_NEW_MESSAGE, ADD_MESSAGE_SUCCESS } from '../ChatScreen/actionTypes'

const defaultState = {
  isFetching: true,
  dialogs: [],
  messages: [],
  users: []
}

function dialogsReducer (state = defaultState, { type, ...action }) {
  switch(type) {
  case t.GET_USER_DIALOGS_SUCCESS:
    return { ...state, isFetching: false, dialogs: action.dialogs }
  case t.GET_USER_DIALOGS_FAIL:
    return { ...state, isFetching: false, dialogs: [] }
  case t.GET_USER_DIALOGS_REQUEST:
    return { ...state, isFetching: true }
  case t.SELECT_DIALOG:
    return { ...state, messages: action.messages || [] }
  case ADD_NEW_MESSAGE:
    return state
  case ADD_MESSAGE_SUCCESS:
    return { ...state, messages: [ ...state.messages, action.message ] }
  case t.GET_USERS_LIST_SUCCESS:
    return { ...state, users: action.users || [] }
  case t.CREATE_DIALOG_SUCCESS:
    return { ...state, users: state.users.filter(u => u.id !== action.id) }
  default:
    return state
  }
}

export default dialogsReducer