import EqualsButtonConnector from './'
import Button from '../../presenters/Button'
import { getCalculateAction } from '../../actions'

describe('Equals Button Connector', () => {
  test('renders a Button component', () => {
    let mountedComponent = mountComponentWithState(<EqualsButtonConnector value="hello" />, {})
    expect(mountedComponent.node.find(Button)).toHaveLength(1)
  })

  test('dispatches action to calculate when clicked', () => {
    let mountedComponent = mountComponentWithState(<EqualsButtonConnector value="hello" />, {})
    mountedComponent.node.find('button').simulate('click')
    expect(mountedComponent.dispatchMock).toHaveBeenCalledWith(getCalculateAction())
  })
})
