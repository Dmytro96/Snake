import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './app/containers/App'
import configureStore from './app/store/configureStore.js'

import { UP } from './app/constants/snake.js'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
