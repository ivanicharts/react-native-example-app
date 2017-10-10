import React from 'react'

import { TextInput, View, StyleSheet } from 'react-native'

const blue = '#CDC6E8'


const Input = (props) => (
  <View style={s.wrapper}>
    <TextInput {...props} />
  </View>
)

const s = StyleSheet.create({
  wrapper: {
    borderBottomColor: blue,
    borderBottomWidth: 1
  }
})

export default Input