import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { selectCredentials } from './selectors'
import { changeCredentials, loginUser } from './actions'
import { Input } from './components'
import { Button } from '../../components'

const blue = '#CDC6E8'


class Login extends PureComponent {

  static navigationOptions = {
    header: null
  }

  _next = () => this.passwordInput && this.passwordInput.focus()

  _onSubmitHandler = () => {
    console.log('_onSubmitHandler')
    this.props.onSubmit()
    // this.props.navigation.navigate('HomeScreen')
  }  

  render() {
    const { navigation, login, onChange } = this.props

    return (
      <View style={s.container}>
        <Text style={s.title}>Sign in</Text>
        <TextInput
          value={login.email}
          keyboardType='email-address'
          style={s.input} 
          placeholderTextColor={blue}
          underlineColorAndroid={blue}
          returnKeyType='next'
          onSubmitEditing={this._next}
          autoCorrect={false}
          autoFocus={true}
          autoCapitalize='none'
          onChangeText={email => onChange({ email })}
          placeholder='email@mail.com' />
        <TextInput 
          secureTextEntry={true}
          style={s.input} 
          ref={ref => (this.passwordInput = ref)}
          underlineColorAndroid={blue}
          placeholderTextColor={blue}
          onSubmitEditing={this._onSubmitHandler}
          onChangeText={password => onChange({ password })}
          placeholder='password' />

        <Button title='Login' onPress={this._onSubmitHandler} />
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#3A3748',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: blue,
    fontSize: 40,
    marginBottom: 30,
    fontWeight: '300'
  },
  input: {
    width: 300,
    textAlign: 'center',
    color: blue,
    borderColor: blue,
    borderWidth: 0,
    marginBottom: 10
  }
})

const mapStateToProps = state => ({
  login: selectCredentials(state)
})

const mapDispatchToProps = dispatch => ({
  onChange: (val) => dispatch(changeCredentials(val)),
  onSubmit: () => dispatch(loginUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)