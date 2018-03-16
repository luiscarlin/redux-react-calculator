import { PUSH_TO_DISPLAY, CLEAR_DISPLAY, CALCULATE } from './'

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

const calculate = () => {
  return {
    type: CALCULATE
  }
}

export { pushToDisplay, clearDisplay, calculate }
