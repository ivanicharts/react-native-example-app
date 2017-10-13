import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, FlatList, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Touchable from 'react-native-platform-touchable'
import ImagePicker from 'react-native-image-picker'

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
    paddingHorizontal: 20,
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
  
  _onSubmit = () => (
    this.setState(
      prev => ({ text: '', messages: [ { time: '10:43', me: true, content: this.state.text }, ...prev.messages ] })
    )
  )
  _keyExtractor = (item, idx) => idx
  _renderMessage = ({ item }) => (<Message { ...item } />)
  _onImageSelect = () => ImagePicker.showImagePicker(options, this._onImageGet)
  
  _onImageGet = response => response.uri && this.setState(
    prev => ({ messages: [ { uri: `data:image/jpeg;base64,${response.data}`, me: true, time: '12:12' }, ...prev.messages ]})
  )

  render = () => (
    <View onPress={this._onPress} style={s.container}>
      <FlatList
        inverted
        ref={ref => this.list = ref}
        style={s.messagesContainer}
        data={this.state.messages}
        renderItem={this._renderMessage}
        keyExtractor={this._keyExtractor}
      />
      <View style={s.textArea}>
        <Touchable onPress={this._onImageSelect}>
          <Icon name='add-a-photo' size={30} color={violet} />
        </Touchable>
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

const options = {
  title: 'Select Image'
}

export default ChatScreen