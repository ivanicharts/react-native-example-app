import React from 'react'

import { Text, View, StyleSheet, TextInput } from 'react-native'
import { AutoExpandingTextInput } from '../../../components'
import { gray, darkGray } from '../../../utils/constants'

const TextArea = ({ onChangeText, value }) => (
  <AutoExpandingTextInput 
    multiline
    placeholder='Your message...'
    placeholderTextColor={darkGray}
    style={[s.textArea]}
    blurOnSubmit={false}
    value={value}
    onChangeText={onChangeText}
    underlineColorAndroid='transparent'
  />
)


const s = StyleSheet.create({
  textArea: {
    backgroundColor: 'white',
    maxHeight: 100,
    flex: 1,
    paddingHorizontal: 10
    // flexDirection: 'row',
    // marginBottom: 5,
    // maxWidth: '95%'
  }
})

export default TextArea