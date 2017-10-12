import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import { selectLogin } from './containers/Login/selectors'
import { Login, HomeScreen, ChatScreen } from './containers'

const Screens = StackNavigator({
  // Login: { screen: Login },
  ChatScreen: { screen: ChatScreen },
  HomeScreen: { screen: HomeScreen },
}, {
  initialRouteName: 'HomeScreen'
})

const App = ({ isLoggedIn }) => (
  // isLoggedIn ? <Screens /> : <Login />
  <Screens />
)

const mapStateToProps = state => ({
  isLoggedIn: selectLogin(state).isLoggedIn
})

export default connect(mapStateToProps)(App)