import React from 'react'
import Touchable from 'react-native-platform-touchable'

import { Text, View, StyleSheet, Image } from 'react-native'
import { OnlineCircle } from './'
import { gray, darkGray } from '../../../utils/constants'

const Message = ({ my, text, time, uri }) => (
  <Touchable style={ my ? s.right : s.left }>
    <View style={[s.container, my && s.reverse]}>
      <View style={s.messageWrapper}>
        {
          uri ? 
          <Image style={s.img} source={{ uri }} /> :
          <Text>{text}</Text>
        }
      </View>
      <Text style={s.time}>{time}</Text>
    </View>
  </Touchable>
)


const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    margin: 3,
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
  },
  img: {
    width: 150,
    minHeight: 150
  }
})

export default Message