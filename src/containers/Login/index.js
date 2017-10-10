import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Input } from './components'
import { Button } from '../../components'

const blue = '#CDC6E8'


class Login extends PureComponent {

  _next = () => this.passwordInput && this.passwordInput.focus()

  _onSubmitHandler = () => this.props.navigation.navigate('HomeScreen')  

  render() {
    const { navigation } = this.props

    return (
      <View style={s.container}>
        <Text style={s.title}>Sign in</Text>
        <TextInput
          keyboardType='email-address'
          style={s.input} 
          placeholderTextColor={blue}
          underlineColorAndroid={blue}
          returnKeyType='next'
          onSubmitEditing={this._next}
          autoCorrect={false}
          autoFocus={true}
          autoCapitalize='none'
          placeholder='email@mail.com' />
        <TextInput 
          secureTextEntry={true}
          style={s.input} 
          ref={ref => (this.passwordInput = ref)}
          underlineColorAndroid={blue}
          placeholderTextColor={blue}
          onSubmitEditing={this._onSubmitHandler}
          placeholder='password' />

        <Button title='Login' onPress={this._onSubmitHandler} />
      </View>
    )
  }
}

Login.navigationOptions = {
  header: null
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

export default Login