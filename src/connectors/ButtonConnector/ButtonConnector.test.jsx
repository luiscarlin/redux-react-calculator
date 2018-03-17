import ButtonConnector from './'
import Button from '../../presenters/Button'
import { getPushToDisplayAction } from '../../actions'

describe('Button Connector', () => {
  test('renders a Button component', () => {
    let mountedComponent = mountComponentWithState(<ButtonConnector value="hello" />, {})
    expect(mountedComponent.node.find(Button)).toHaveLength(1)
  })

  test('dispatches action to push to display when clicked', () => {
    let mountedComponent = mountComponentWithState(<ButtonConnector value="hello" />, {})
    mountedComponent.node.find('button').simulate('click')
    expect(mountedComponent.dispatchMock).toHaveBeenCalledWith(getPushToDisplayAction("hello"))
  })
})
