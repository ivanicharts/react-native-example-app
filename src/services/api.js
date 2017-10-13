import axios from 'axios'

import config from '../config.json'
import Storage from './storage'
import { TOKEN_KEY } from '../utils/constants'

export let api = initAPI()

function initAPI (token = null) {
  console.log('new api', token)
  return axios.create({
    baseURL: config.api,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    params: {
      [TOKEN_KEY]: token
    },
    paramsSerializer: params => Object.entries(params).map(param => param.join('=')).join('&')
  })
}

export function injectToken (token) {
  api = initAPI(token)
}
