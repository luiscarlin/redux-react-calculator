import React, { Component } from 'react'
import configureStore from './store/configureStore'
import DisplayConnector from './connectors/DisplayConnector'
import ButtonConnector from './connectors/ButtonConnector'
import { Provider } from 'react-redux'
import EqualsButtonConnector from './connectors/EqualsButtonConnector';

const store = configureStore()

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div>
          <DisplayConnector />
          <ButtonConnector value='1'/>
          <ButtonConnector value='2'/>
          <ButtonConnector value='3'/>
          <EqualsButtonConnector value="="/>
        </div>
      </Provider>
    )
  }
}

export default App
