import { PUSH_TO_DISPLAY } from './'
import { pushToDisplay } from './'

describe('displayActions', () => {
  it('creates an action to push a char to display', () => {
    const char = '7'

    const expectedAction = {
      type: PUSH_TO_DISPLAY,
      value: char
    }
    expect(pushToDisplay(char)).toEqual(expectedAction)
  })
})