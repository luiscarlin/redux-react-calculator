import React, { Component } from 'react'
import configureStore from './store/configureStore'
import ButtonConnector from './connectors/ButtonConnector'
import { Provider } from 'react-redux'

const store = configureStore()

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <ButtonConnector value='1'/>
      </Provider>
    )
  }
}

export default App
