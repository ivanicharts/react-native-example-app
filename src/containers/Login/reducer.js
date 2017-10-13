import * as t from './actionTypes'

const defaultState = {
  email: '',
  password: '',
  error: undefined
}

function loginReducer (state = defaultState, { type, ...action }) {
  switch(type) {
  case t.CHECK_TOKEN:
    return { ...state, token: action.token }
  case t.CREDENTIALS_CHANGE:
    return { ...state, ...action.data }
  case t.LOGIN_REQUEST:
    return { ...state, fetching: true, isLoggedIn: undefined }    
  case t.LOGIN_SUCCESS:
    return { ...state, isLoggedIn: true, data: action.data, fetching: false }
  case t.LOGIN_FAIL:
    return { ...state, isLoggedIn: false, fetching: false, error: action.error }
  case t.INVALID_TOKEN:
    return { ...state, isLoggedIn: false }
  default:
    return state
  }
}

export default loginReducer