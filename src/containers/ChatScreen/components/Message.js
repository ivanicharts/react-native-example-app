import React from 'react'
import Touchable from 'react-native-platform-touchable'

import { Text, View, StyleSheet, Image } from 'react-native'
import { OnlineCircle } from './'
import { gray, darkGray } from '../../../utils/constants'

const Message = ({ my, content, time }) => (
  <Touchable style={ my ? s.left : s.right }>
    <View style={[s.container, !my && s.reverse]}>
      <View style={s.messageWrapper}>
        <Text>{content}</Text>
      </View>
      <Text style={s.time}>{time}</Text>
    </View>
  </Touchable>
)


const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 5,
    maxWidth: '95%'
  },
  reverse: {
    flexDirection: 'row-reverse'
  },
  messageWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: gray,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    maxWidth: '85%'
  },
  time: {
    alignSelf: 'center',
    marginHorizontal: 5,
    color: darkGray,
    minWidth: 40
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 20,
    borderRadius: 100
  },
  left: {
    alignSelf: 'flex-start'
  },
  right: {
    alignSelf: 'flex-end'
  }
})

export default Message