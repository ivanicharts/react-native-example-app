import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

class HomeScreen extends PureComponent {
  static navigationOptions = {
    title: 'Home'
  }

  render = () => (
    <View>
      <Text>Home screen</Text>
    </View>
  )
}

export default HomeScreen