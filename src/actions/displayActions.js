import { PUSH_TO_DISPLAY, CLEAR_DISPLAY } from './'

const pushToDisplay = (char) => {
  return {
    type: PUSH_TO_DISPLAY,
    value: char
  }
}

const clearDisplay = () => {
  return {
    type: CLEAR_DISPLAY
  }
}

export { pushToDisplay, clearDisplay }
