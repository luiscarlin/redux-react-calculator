import EqualsButtonConnector from './'
import Button from '../../presenters/Button'
import { clearDisplay } from '../../actions'

describe('Button Connector', () => {
  test('renders a Button component', () => {
    let mountedComponent = mountComponentWithState(<EqualsButtonConnector value="hello" />, {})
    expect(mountedComponent.node.find(Button)).toHaveLength(1)
  })

  test('dispatches action to clear display when clicked', () => {
    let mountedComponent = mountComponentWithState(<EqualsButtonConnector value="hello" />, {})
    mountedComponent.node.find('button').simulate('click')
    expect(mountedComponent.dispatchMock).toHaveBeenCalledWith(clearDisplay())
  })
})
