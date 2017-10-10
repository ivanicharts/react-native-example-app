import * as t from './actionTypes'

const defaultState = {
  email: '',
  password: ''
}

function loginReducer (state = defaultState, { type, ...action }) {
  switch(type) {
  case t.CREDENTIALS_CHANGE:
    return { ...state, ...action.data }
  case t.LOGIN_REQUEST:
    return { ...state, fetching: true }    
  case t.LOGIN_SUCCESS:
    return { ...state, isLoggedIn: true, data: action.data, fetching: false }
  case t.LOGIN_FAIL:
    return { ...state, isLoggedIn: false, fetching: false, error: action.error }
  default:
    return state
  }
}

export default loginReducer