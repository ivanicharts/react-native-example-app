import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import { selectLogin } from './containers/Login/selectors'
import { Login, HomeScreen, ChatScreen } from './containers'
import { LoadingScreen } from './components'
import { checkToken } from './containers/Login/actions'
import Storage from './services/storage'
import { injectToken } from './services/api'

const Screens = StackNavigator({
  ChatScreen: { screen: ChatScreen },
  HomeScreen: { screen: HomeScreen },
}, {
  initialRouteName: 'HomeScreen'
})

class App extends PureComponent {

  async componentWillMount() {
    const token = await Storage.getToken()
    token && await injectToken(token)
    this.props.onAppInit()
  }

  render() {
    const { isLoggedIn } = this.props
      
    return (
      isLoggedIn === void 0 ? <LoadingScreen /> : isLoggedIn === true ?
        <Screens /> : <Login />
      // <Screens />
    )
  }

}

const mapStateToProps = state => ({
  isLoggedIn: selectLogin(state).isLoggedIn
})

const mapDispatchToProps = dispatch => ({
  onAppInit: (token) => dispatch(checkToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)