import React, { PureComponent } from 'react';
import { Provider } from 'react-redux'

import configureStore from './src/utils/configureStore'
import App from './src'

const store = configureStore()

console.ignoredYellowBox = ['Remote debugger']

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)

