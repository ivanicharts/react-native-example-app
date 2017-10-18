import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, FlatList, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Touchable from 'react-native-platform-touchable'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { api } from '../../config.json'

import { themeColor, lightGray, gray, violet } from '../../utils/constants'
import { messages } from '../../../chats.json'
import { Message, TextArea } from './components'
import * as a from './actions'
import { makeSelectMessages } from './selectors'

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
    messages: this.props.navigation.state.params.user.data.messages || [],
    text: ''
  }

  componentDidMount() {
    console.log('props', this.props)
    const id = this.props.navigation.state.params.user.data.id
    const url = `${api}api/dialogs/${id}/message-stream?access_token=${'nBXRbFEGG1KddxCfVu9K7yjwrXLY7Cv0uAB1j1w1NqQsGl4CsdceJ51sauF28vL2'}`
    const src = new EventSource(url)
    console.log('src', src)
    src.addEventListener('data', ({ data }) => this.props.messageSuccess(JSON.parse(data)))
    src.onerror = (...args) => console.log('ERRR', args)
    this.src = src
  }

  componentWillUnmount() {
    this.src && this.src.close()
  }

  _onChangeText = text => this.setState({ text })
  
  _onSubmit = () => (
    console.log('textComponent', this.state.text),
    this.props.sendMessage(this.props.navigation.state.params.user.data.id, this.state.text),
    this.setState({ text: '' })
  )
      // this.setState(
      //   prev => ({ text: '', messages: [ { time: '10:43', my: true, text: this.state.text }, ...prev.messages ] })
      // )
  _keyExtractor = (item, idx) => idx
  _renderMessage = ({ item }) => (<Message { ...item } />)
  _onImageSelect = () => ImagePicker.showImagePicker(options, this._onImageGet)
  
  _onImageGet = response => response.uri && this.setState(
    prev => ({ messages: [ { uri: `data:image/jpeg;base64,${response.data}`, my: true, time: '12:12' }, ...prev.messages ]})
  )

  render = () => {
    const messages = this.props.messages
    const userId = this.props.navigation.state.params.user.data

    return (
      <View onPress={this._onPress} style={s.container}>
        <FlatList
          inverted
          ref={ref => this.list = ref}
          style={s.messagesContainer}
          data={messages}
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
}

const options = {
  title: 'Select Image'
}

const mapStateToProps = state => ({
  messages: makeSelectMessages(state)
})

const mapDispatchToProps = dispatch => ({
  sendMessage: bindActionCreators(a.sendMessage, dispatch),
  messageSuccess: bindActionCreators(a.messageSuccess, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)