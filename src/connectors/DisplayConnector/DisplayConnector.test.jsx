import DisplayConnector from './'
import Display from '../../presenters/Display'

describe('Display Connector', () => {
  let mountedComponent
  const fakeState = {
    displayReducer: {
      display: 'somevalue'
    }
  }

  beforeEach(() => {
    mountedComponent = mountComponentWithState(<DisplayConnector />, fakeState)
  })

  it('renders a Display component', () => {
    expect(mountedComponent.node.find(Display)).toHaveLength(1)
  })

  it('renders an input element with value tied to display in state', () => {
    expect(mountedComponent.node.find('input').props().defaultValue).toEqual('somevalue')
  })
})
