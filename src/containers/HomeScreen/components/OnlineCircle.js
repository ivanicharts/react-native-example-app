import React from 'react'

import { Text, View, StyleSheet, Image } from 'react-native'
import { darkGray, green } from '../../../utils/constants'

const OnlineCircle = ({ isOnline }) => (
  <View style={ isOnline ? s.isOnline : s.isOffline } />
)


const s = StyleSheet.create({
  isOnline: {
    width: 5,
    height: 5,
    backgroundColor: green,
  },
  isOffline: {
    width: 5,
    height: 5,
    backgroundColor: darkGray
  }
})

export default OnlineCircle