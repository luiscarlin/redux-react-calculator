import DisplayConnector from './'
import Display from '../../presenters/Display'

describe('Display Connector', () => {
  test('renders a Display component', () => {
    let mountedComponent = mountComponentWithState(<DisplayConnector />, {})
    expect(mountedComponent.node.find(Display)).toHaveLength(1)
  })
})
