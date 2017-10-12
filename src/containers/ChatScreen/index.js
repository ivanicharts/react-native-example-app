import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Touchable from 'react-native-platform-touchable'

import { themeColor, lightGray, gray, violet } from '../../utils/constants'
import { messages } from '../../../chats.json'
import { Message, TextArea } from './components'

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
    backgroundColor: lightGray,
    flex: 1,
    alignItems: 'center'
  },
  messagesContainer: {
    width: '100%',
    paddingHorizontal: 20
  },
  textArea: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    borderTopColor: lightGray,
    borderTopWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  }
})

class ChatScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.user.name,
    headerStyle: s.header,
    headerTitleStyle: s.title,
    headerRight: (<View></View>),
    headerTintColor: 'white'
  })

  state = {
    messages,
    text: ''
  }

  _onChangeText = text => this.setState({ text })
  _onSubmit = () => (messages.push({ time: '10:43', me: true, content: this.state.text }),this.setState({ text: '' }))
  _keyExtractor = (item, idx) => idx
  _renderMessage = ({ item }) => (<Message { ...item } />)

  render = () => (
    <View onPress={this._onPress} style={s.container}>
      <FlatList
        style={s.messagesContainer}
        data={this.state.messages}
        renderItem={this._renderMessage}
        keyExtractor={this._keyExtractor}
      />
      <View style={s.textArea}>
        <Icon name='add-a-photo' size={30} color={violet} />
        <TextArea 
          onChangeText={this._onChangeText}
          value={this.state.text}
        />
        <Touchable onPress={this._onSubmit} >
          <Icon name='send' size={30} color={violet} />
        </Touchable>
      </View>
    </View>
  )
}



export default ChatScreen