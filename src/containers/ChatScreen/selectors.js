import { createSelector } from 'reselect'

const selectDialogs = state => state.dialogs
const selectUserId = state => state.login.data.userId
export const makeSelectMessages = createSelector(
  [selectDialogs, selectUserId],
  ({ messages, }, userId) => messages
    .map(mess => (mess.my = mess.author === userId ? true : false, mess))
    .reverse()
)
