import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const s = StyleSheet.create({
  header: {
    backgroundColor: '#3A3748'
  },
  title: {
    color: 'white',
    fontWeight: '300'
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center'
  },
  search: {
    height: 40,
    width: '100%',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  }
})

class HomeScreen extends PureComponent {
  static navigationOptions = {
    title: 'Chat list',
    headerStyle: s.header,
    headerTitleStyle: s.title
  }

  render = () => (
    <View style={s.container}>
      <View style={s.search}>
        <Text>Search</Text>
      </View>
      <Text>Home screen</Text>
    </View>
  )
}


export default HomeScreen