import React, { Component } from 'react'
import configureStore from './store/configureStore'
import Button from './presenters/Button'
import { Provider } from 'react-redux'

const store = configureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Button display='1' />
      </Provider>
    )
  }
}

export default App
