import React, { Component } from 'react'

export default (Component, Drawer) => class extends Component {
  componentDidMount() {
    console.log('WithDrawer')
  }
  render = () => [
    <Drawer key='drawer' />,
    <Component key='component' { ...this.props } />
  ]
}