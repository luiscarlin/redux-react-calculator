import ButtonConnector from './'
import React from 'react'
import Button from '../../presenters/Button'
import { pushToDisplay } from '../../actions'

describe('Button Connector', () => {
  test('renders a Button component', () => {
    let mountedComponent = mountComponentWithState(<ButtonConnector value="hello" />, {})
    expect(mountedComponent.node.contains(Button)).toBe(true)
  })

  test('dispatches action to push to display when clicked', () => {
    let mountedComponent = mountComponentWithState(<ButtonConnector value="hello" />, {})
    mountedComponent.node.find('button').simulate('click')
    expect(mountedComponent.dispatchMock).toHaveBeenCalledWith(pushToDisplay("hello"))
  })
})
