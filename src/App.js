import React, { Component } from 'react'
import configureStore from './store/configureStore'
import Button from './presenters/Button'
import { Provider } from 'react-redux'
import { pushToDisplay } from './actions/displayActions'

const store = configureStore();


let onclick = (val) => {
  store.dispatch(pushToDisplay(val))
}
pushToDisplay

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Button display='1' onclick={onclick} />
      </Provider>
    )
  }
}

export default App
