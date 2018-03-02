import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { Provider } from 'react-redux'

enzyme.configure({ adapter: new Adapter() })

window.mountComponentWithState = (Component , state) => {

  let dispatchMock = jest.fn()

  let fakeStore = {
    getState: () => {
      return state
    },
    dispatch: dispatchMock,
    subscribe: jest.fn()
  }

  let node = enzyme.mount(
    <Provider store={fakeStore}>
      {Component}
    </Provider>
  )

  return {
    dispatchMock,
    node
  }
}
