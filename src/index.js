import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './app/containers/App'
import configureStore from './app/store/configureStore.js'

import { UP } from './app/constants/snake.js'

const store = configureStore({snake: {
    points: [
      {x: 50, y: 200},
      {x: 75, y: 200},
      {x: 75, y: 175},
      {x: 75, y: 150}
    ],
    direction: UP
}})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
