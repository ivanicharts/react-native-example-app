import * as t from './actionTypes'

export const loginUser = () => ({ type: t.LOGIN })
export const loginSuccess = data => ({ type: t.LOGIN_SUCCESS, data })
export const loginFail = error => ({ type: t.LOGIN_FAIL, error })
export const changeCredentials = data => ({ type: t.CREDENTIALS_CHANGE, data })  
export const checkToken = token => ({ type: t.CHECK_TOKEN, token })
export const invalidToken = () => ({ type: t.INVALID_TOKEN })
export const logout = () => ({ type: t.INVALID_TOKEN })