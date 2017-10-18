import * as t from './actionTypes'

export const sendMessage = (dialogId, message) => ({ type: t.ADD_NEW_MESSAGE, dialogId, message })
export const messageSuccess = message => ({ type: t.ADD_MESSAGE_SUCCESS, message: { ...message, my: true } })