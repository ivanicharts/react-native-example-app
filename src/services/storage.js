import { AsyncStorage } from 'react-native'

import { TOKEN_KEY } from '../utils/constants'

const Storage = {
  get: AsyncStorage.getItem,
  set: AsyncStorage.setItem,
  getToken: () => AsyncStorage.getItem(TOKEN_KEY),
  setToken: token => AsyncStorage.setItem(TOKEN_KEY, token)
}

export default Storage