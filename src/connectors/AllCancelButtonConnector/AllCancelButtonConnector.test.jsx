import AllCancelButtonConnector from './'
import Button from '../../presenters/Button'
import { clearDisplay } from '../../actions'

describe('All Cancel Button Connector', () => {
  test('renders a Button component', () => {
    let mountedComponent = mountComponentWithState(<AllCancelButtonConnector value="hello" />, {})
    expect(mountedComponent.node.find(Button)).toHaveLength(1)
  })

  test('dispatches action to clear display when clicked', () => {
    let mountedComponent = mountComponentWithState(<AllCancelButtonConnector value="hello" />, {})
    mountedComponent.node.find('button').simulate('click')
    expect(mountedComponent.dispatchMock).toHaveBeenCalledWith(clearDisplay())
  })
})
