import * as t from './actionTypes'

export const getUserDialogs = () => ({ type: t.GET_USER_DIALOGS })
export const getUserDialogsSuccess = dialogs => ({ type: t.GET_USER_DIALOGS_SUCCESS, dialogs })
export const getUserDialogsFail = () => ({ type: t.GET_USER_DIALOGS_FAIL })
export const getUserDialogsRequest = () => ({ type: t.GET_USER_DIALOGS_REQUEST })
export const selectDialog = messages => ({ type: t.SELECT_DIALOG, messages })

export const getUsersList = () => ({ type: t.GET_USERS_LIST })
export const getUsersListRequest = () => ({ type: t.GET_USERS_LIST_REQUEST })
export const getUsersListSuccess = users => ({ type: t.GET_USERS_LIST_SUCCESS, users })
export const createDialog = id => ({ type: t.CREATE_DIALOG, id })