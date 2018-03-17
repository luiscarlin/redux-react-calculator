import { PUSH_TO_DISPLAY_TYPE, CLEAR_DISPLAY_TYPE, CALCULATE_TYPE, getPushToDisplayAction, getClearDisplayAction, getCalculateAction } from './'

describe('displayActions', () => {
  it('creates an action to push text to display', () => {
    const text = 'something'

    const expectedAction = {
      type: PUSH_TO_DISPLAY_TYPE,
      value: text
    }
    expect(getPushToDisplayAction(text)).toEqual(expectedAction)
  })

  it('creates an action to clear the display', () => {
    const expectedAction = {
      type: CLEAR_DISPLAY_TYPE
    }
    expect(getClearDisplayAction()).toEqual(expectedAction)
  })

  it('creates an action to calculate the value in the display', () => {
    const expectedAction = {
      type: CALCULATE_TYPE
    }
    expect(getCalculateAction()).toEqual(expectedAction)
  })
})
