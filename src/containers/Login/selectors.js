import { createSelector } from 'reselect'

export const selectLogin = state => state.login
// export const selectLoginError = state => state.login.error

export const selectCredentials = createSelector(
  selectLogin,
  ({ email, password }) => (({ email, password }))
)
export const selectField = (field) => createSelector(
  selectLogin,
  loginState => loginState[field]
)
