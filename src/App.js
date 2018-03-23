import React, { Component } from 'react'
import configureStore from './store/configureStore'
import DisplayConnector from './connectors/DisplayConnector'
import ButtonConnector from './connectors/ButtonConnector'
import { Provider } from 'react-redux'
import AllCancelButtonConnector from './connectors/AllCancelButtonConnector'
import EqualsButtonConnector from './connectors/EqualsButtonConnector'
import KeysContainer from './presenters/KeysContainer'
import CalculatorContainer from './presenters/CalculatorContainer'

const store = configureStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <CalculatorContainer>
          <DisplayConnector />
          <KeysContainer>
            <AllCancelButtonConnector value="AC"/>
            <ButtonConnector value='('/>
            <ButtonConnector value=')'/>
            <ButtonConnector value='^'/>
            <ButtonConnector value='7'/>
            <ButtonConnector value='8'/>
            <ButtonConnector value='9'/>
            <ButtonConnector value='/'/>
            <ButtonConnector value='4'/>
            <ButtonConnector value='5'/>
            <ButtonConnector value='6'/>
            <ButtonConnector value='*'/>
            <ButtonConnector value='1'/>
            <ButtonConnector value='2'/>
            <ButtonConnector value='3'/>
            <ButtonConnector value='+'/>
            <ButtonConnector value='0'/>
            <ButtonConnector value='.'/>
            <EqualsButtonConnector value='='/>
            <ButtonConnector value='-'/>
          </KeysContainer>
        </CalculatorContainer>
      </Provider>
    )
  }
}

export default App
