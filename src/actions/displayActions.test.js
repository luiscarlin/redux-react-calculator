import { PUSH_TO_DISPLAY, CLEAR_DISPLAY } from './'
import { pushToDisplay, clearDisplay } from './'

describe('displayActions', () => {
  it('creates an action to push text to display', () => {
    const text = 'something'

    const expectedAction = {
      type: PUSH_TO_DISPLAY,
      value: text
    }
    expect(pushToDisplay(text)).toEqual(expectedAction)
  })

  it('creates an action to clear the display', () => {
    const expectedAction = {
      type: CLEAR_DISPLAY
    }
    expect(clearDisplay()).toEqual(expectedAction)
  })
})
