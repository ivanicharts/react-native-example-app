import { createSelector } from 'reselect'

const selectLogin = state => state.login

export const selectCredentials = () => createSelector(
  selectLogin,
  ({ email, password }) => (console.log('email, passowrd', email, passowrd), ({ email, passowrd }))
)
export const selectField = (field) => createSelector(
  selectLogin,
  loginState => loginState[field]
)