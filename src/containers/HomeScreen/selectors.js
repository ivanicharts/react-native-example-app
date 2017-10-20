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

export const makeSelectUsers = createSelector(
  selectDialogs,
  ({ users, dialogs }) => {
    // dialogs.forEach(({ members }) => )
    // res = dialogs.reduce(
    //   (acc, { data }) => (
    //     acc.filter(({ id }) => (
    //       console.log('[][]', data.members.find(usr => usr.id === id)),
    //       data.members.find(usr => (console.log('usr.id === id', usr.id !== id),usr.id !== userId && usr.id === id))
    //     ))
    //   ), users
    // )
    
    // console.log('users after', res)
    return users
  }
)