import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, FlatList } from 'react-native'

import { themeColor, darkerThemeColor, violet, riverBlue } from '../../utils/constants'
import { chats } from '../../../chats.json'
import { ChatItem } from './components'

const s = StyleSheet.create({
  header: {
    backgroundColor: themeColor,
    height: 60
  },
  title: {
    color: 'white',
    fontWeight: '300',
    alignSelf: 'center'
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center'
  },
  newChat: {
    height: 50,
    width: '100%',
    backgroundColor: violet,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newChatColor: {
    color: 'white',
    fontSize: 16
  },
  listContainer: {
    width: '100%'
  }
})

class HomeScreen extends PureComponent {
  static navigationOptions = {
    title: 'CHAT',
    headerStyle: s.header,
    headerTitleStyle: s.title
  }

  _keyExtractor = (item, idx) => idx
  _renderChatItem = ({ item }) => (<ChatItem { ...item } onPress={this._onPress(item)} />)
  _onPress = user => () => this.props.navigation.navigate('ChatScreen', { user })

  render = () => (
    <View onPress={this._onPress} style={s.container}>
      <StatusBar backgroundColor={darkerThemeColor} />
      <View style={s.newChat}>
        <Text style={s.newChatColor} >New message</Text>
      </View>
      <FlatList 
        style={s.listContainer}
        data={chats}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderChatItem}
      />
    </View>
  )
}



export default HomeScreen