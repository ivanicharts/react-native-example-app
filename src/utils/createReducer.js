import { combineReducers } from 'redux'
import login from '../containers/Login/reducer'
import dialogs from '../containers/HomeScreen/reducer'

export default combineReducers({
  login, dialogs
})