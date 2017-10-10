import * as t from './actionTypes'

export const loginUser = () => ({ type: t.LOGIN })
export const loginSuccess = data => ({ type: t.LOGIN_SUCCESS, data })
export const changeCredentials = data => ({ type: t.CREDENTIALS_CHANGE, data })  