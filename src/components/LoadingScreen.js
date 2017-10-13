import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

import { themeColor } from '../utils/constants'

export default ({ color, title, onPress }) => (
  <View style={s.container}>
    <ActivityIndicator size='large' color='white' />
  </View>
)

const s = StyleSheet.create({
  container: {
    backgroundColor: themeColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})