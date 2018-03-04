import displayReducer from './'
import { PUSH_TO_DISPLAY } from '../../actions';

describe('Display Reducer', () => {
  const INITIAL_STATE = {
    display: ''
  }

  it('returns the current state when cannot handle action', () => {
    let currentState = {
      display: 'something'
    }
    const nextState = displayReducer(currentState, { type: "what", value: "do you want" })
    expect(nextState).toEqual(currentState)
  })

  it('should use the initial state as default', () => {
    const state = displayReducer(undefined, { type: "hello" })
    expect(state).toEqual(INITIAL_STATE)
  })

  describe('when given the action to push to display', () => {
    const currentState = {
      display: '123'
    }
    const action = { 
      type: PUSH_TO_DISPLAY,
      value: '4'
    }
    
    it('returns a new state with only display field updated', () => {
      const expectedState = Object.assign({}, currentState, { display: '1234' })
      const nextState = displayReducer(currentState, action)
      expect(nextState).toEqual(expectedState)
    })
  })
})