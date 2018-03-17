import { PUSH_TO_DISPLAY, CLEAR_DISPLAY, CALCULATE, getPushToDisplayAction, getClearDisplayAction, getCalculateAction } from './'

describe('displayActions', () => {
  it('creates an action to push text to display', () => {
    const text = 'something'

    const expectedAction = {
      type: PUSH_TO_DISPLAY,
      value: text
    }
    expect(getPushToDisplayAction(text)).toEqual(expectedAction)
  })

  it('creates an action to clear the display', () => {
    const expectedAction = {
      type: CLEAR_DISPLAY
    }
    expect(getClearDisplayAction()).toEqual(expectedAction)
  })

  it('creates an action to calculate the value in the display', () => {
    const expectedAction = {
      type: CALCULATE
    }
    expect(getCalculateAction()).toEqual(expectedAction)
  })
})
