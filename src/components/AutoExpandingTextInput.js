import React, { PureComponent } from 'react'
import { TextInput } from 'react-native'

class AutoExpandingTextInput extends PureComponent {

  state = { height: 0 }

  _onContentSizeChange = evt => (this.setState({ height: evt.nativeEvent.contentSize.height }))
  render = () => (
    <TextInput 
      {...this.props}
      multiline
      blurOnSubmit={false}
      style={[this.props.style, { height: Math.max(50, this.state.height) }]}
      onContentSizeChange={this._onContentSizeChange}
    />
  )

}

export default AutoExpandingTextInput