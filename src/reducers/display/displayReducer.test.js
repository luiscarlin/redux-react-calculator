import displayReducer from './'

describe('Display Reducer', () => {
  it('should return original state when cannot handle action', () => {
    let originalState = {
      display: 'something'
    }
    let nextState = displayReducer(originalState, { type: "what", value: "do you want" })
    expect(nextState).toEqual(originalState)
  })  
})