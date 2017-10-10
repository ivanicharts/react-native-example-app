import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { Login, HomeScreen } from './containers'

const Screens = StackNavigator({
  Login: { screen: Login },
  HomeScreen: { screen: HomeScreen },
})

const App = () => (
  <Screens />
)

export default App