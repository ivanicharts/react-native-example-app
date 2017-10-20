import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, FlatList } from 'react-native'
import Touchable from 'react-native-platform-touchable'

import * as sl from './selectors'
import { themeColor, darkerThemeColor, violet, riverBlue } from '../../utils/constants'
import { chats } from '../../../chats.json'
import { ChatItem, CreateDialogModal } from './components'
import * as a from './actions'

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
    headerTitleStyle: s.title,
  }

  state = {
    visible: false
  }

  componentDidMount() {
    this.props.getUserDialogs()
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
  }

  _toggleModal = action => this.setState(prev => ({ visible: action || !prev.visible }))
  _keyExtractor = (item, idx) => idx
  _renderChatItem = ({ item }) => (<ChatItem { ...item } onPress={this._onPress(item)} />)
  _onPress = user => () => (
    this.props.selectDialog(user.data.messages),
    this.props.navigation.navigate('ChatScreen', { user })
  )

  render = () => (
    <View style={s.container}>
      <StatusBar backgroundColor={darkerThemeColor} />
      <Touchable onPress={() => this._toggleModal(true)} style={s.newChat}>
        <Text style={s.newChatColor} >+New message</Text>
      </Touchable>
      <FlatList 
        style={s.listContainer}
        data={this.props.dialogs}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderChatItem}
      />
      <CreateDialogModal 
        toggleModal={this._toggleModal}
        visible={this.state.visible} />
    </View>
  )
}

const mapDispatchToProps = dispatch => ({
  getUserDialogs: () => dispatch(a.getUserDialogs()),
  selectDialog: messages => dispatch(a.selectDialog(messages)),
  getUsersList: () => dispatch(a.getUsersList())
})

const mapStateToProps = state => ({
  user: sl.makeSelectUser(state),
  dialogs: sl.makeSelectDialogs(state),
  dialogsAreFetching: sl.makeSelectDialogsState(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)