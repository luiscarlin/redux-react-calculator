import displayReducer from './'

describe('Display Reducer', () => {
  const INITIAL_STATE = {
    display: ''
  }

  it('should return original state when cannot handle action', () => {
    let originalState = {
      display: 'something'
    }
    const nextState = displayReducer(originalState, { type: "what", value: "do you want" })
    expect(nextState).toEqual(originalState)
  })

  it('should use the initial state as default', () => {
    const state = displayReducer(undefined, { type: "hello" })
    expect(state).toEqual(INITIAL_STATE)
  })
})