import { createSelector } from 'reselect'

const selectLogin = state => state.login
export const makeSelectUser = createSelector(
  selectLogin,
  ({ data }) => data
)

const selectDialogs = state => state.dialogs
export const makeSelectDialogs = createSelector(
  selectDialogs,
  ({ dialogs }) => dialogs
)
export const makeSelectDialogsState = createSelector(
  selectDialogs,
  ({ isFetching }) => isFetching
)