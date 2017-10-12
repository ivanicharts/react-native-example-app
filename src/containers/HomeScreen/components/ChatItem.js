import React from 'react'
import Touchable from 'react-native-platform-touchable'

import { Text, View, StyleSheet, Image } from 'react-native'
import { OnlineCircle } from './'
import { gray } from '../../../utils/constants'

const ChatItem = ({ name, message, avatar, isOnline, time, onPress }) => (
  <Touchable onPress={onPress}>
    <View style={s.container}>
      <View style={s.row}>
        <Image 
          source={{uri: avatar || 'https://cdn.dribbble.com/users/59100/screenshots/2684072/arkhamknigth_1x.jpg'}}
          style={s.avatar}
        />
      </View>
      <View style={s.infoWrapper}>
        <View style={s.nameWrapper}>
          <View style={s.rowName}>
            <Text style={s.name}>{ name }</Text>
            <OnlineCircle isOnline={ isOnline } />
          </View>
          <Text style={s.time}>{ time }</Text>
        </View>
        <Text
          style={s.message}
          ellipsizeMode='tail'
          numberOfLines={1}>
          { message }
        </Text>
      </View>
    </View>
  </Touchable>
)


const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: gray,
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 20,
    borderRadius: 100
  },
  row: {
    flexDirection: 'row',
  },
  rowName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoWrapper: {
    paddingRight: 20,
    paddingTop: 20,
    flexGrow: 1,
    width: 0
  },
  name: {
    fontSize: 16,
    fontWeight: '300',
    color: 'black',
    marginRight: 5
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  message: {
    paddingRight: 10,
    flexWrap: 'wrap',
    flex: 1,
  },
  time: {
    // color: 'red'
  }
})

export default ChatItem