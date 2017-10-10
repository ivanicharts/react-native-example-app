import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import Touchable from 'react-native-platform-touchable'

export default ({ color, title, onPress }) => (
  <Touchable
    style={s.button}
    onPress={onPress}
    >
      <Text style={s.buttonText}>{ title }</Text>
  </Touchable>
)

const s = StyleSheet.create({
  button: {
    backgroundColor: '#343141',
    width: 300,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  buttonText: {
    fontSize: 16,
    color: '#CDC6E8',
  }
})