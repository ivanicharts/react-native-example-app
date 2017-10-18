import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, DrawerNavigator, DrawerItems, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { selectLogin } from './containers/Login/selectors'
import { Login, HomeScreen, ChatScreen, Logout } from './containers'
import { LoadingScreen } from './components'
import { checkToken } from './containers/Login/actions'
import Storage from './services/storage'
import { injectToken } from './services/api'
import withDrawer from './utils/HOCS/withDrawer'

const Screens = StackNavigator({
  ChatScreen: { screen: ChatScreen },
  HomeScreen: { screen: HomeScreen },
}, {
  headerMode: 'screen',
  initialRouteName: 'HomeScreen'
})

const WithDrawer = DrawerNavigator({
  Dialogs: { screen: Screens },
  Logout: { screen: Logout },
}, {
  headerMode: 'screen',
  initialRouteName: 'Dialogs',
  backBehavior: 'initialRoute',
  contentComponent: props => <DrawerItems {...props}/>
})

const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName } = action
  return (
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) ? null : getStateForAction(action, state)
}

Screens.router.getStateForAction = navigateOnce(Screens.router.getStateForAction)

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
        <WithDrawer /> : <Login />
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