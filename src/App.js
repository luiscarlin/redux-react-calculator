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
          <ButtonConnector value='4'/>
          <ButtonConnector value='5'/>
          <ButtonConnector value='6'/>
          <ButtonConnector value='7'/>
          <ButtonConnector value='8'/>
          <ButtonConnector value='9'/>
          <ButtonConnector value='0'/>
          <ButtonConnector value='+'/>
          <ButtonConnector value='-'/>
          <ButtonConnector value='*'/>
          <EqualsButtonConnector value="="/>
        </div>
      </Provider>
    )
  }
}

export default App
