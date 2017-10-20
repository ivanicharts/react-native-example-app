import React, { Component } from 'react'
import { Modal, View, Text, FlatList, StyleSheet, TouchableWithoutFeedback as Touchable } from 'react-native'
import { connect } from 'react-redux'

import { makeSelectUsers } from '../selectors'
import { getUsersList, createDialog } from '../actions'

class CreateDialogModal extends Component {

  componentDidMount() {
    // this.props.getUsersList()
  }

  _keyExtrator = (_, idx) => idx
  _renderItem = ({ item }) => (
    <Touchable onPress={() => this.props.createDialog(item.id)}>
      <View>
        <Text style={s.listItem}>{ item.username.toUpperCase() }</Text>
      </View>
    </Touchable>
  )

  render() {
    const { visible, toggleModal, users } = this.props

    return (
      <Modal
        onRequestClose={() => toggleModal(false)}
        visible={visible}
      >
        <View>
          <FlatList 
            data={users}
            keyExtractor={this._keyExtrator}
            renderItem={this._renderItem}
          />
        </View>
      </Modal>
    )
  }
}

const s = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7'
  }
})

const mapDispatchToProps = dispatch => ({
  getUsersList: () => dispatch(getUsersList()),
  createDialog: id => dispatch(createDialog(id))
})

const mapStateToProps = state => ({
  users: makeSelectUsers(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateDialogModal)