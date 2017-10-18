import React, { Component } from 'react'
import { connect } from 'react-redux'

import Storage from '../../services/storage'
import { LoadingScreen } from '../../components'
import * as a from '../Login/actions'

class Logout extends Component {
  componentWillMount() {
    this.props.logout()
    Storage.removeToken()
  }

  render = () => <LoadingScreen />
}

mapDispatchToProps = dispatch => ({
  logout: () => dispatch(a.logout())
})

export default connect(null, mapDispatchToProps)(Logout)