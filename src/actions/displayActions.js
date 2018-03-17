import { PUSH_TO_DISPLAY, CLEAR_DISPLAY, CALCULATE } from './'

const getPushToDisplayAction = (char) => {
  return {
    type: PUSH_TO_DISPLAY,
    value: char
  }
}

const getClearDisplayAction = () => {
  return {
    type: CLEAR_DISPLAY
  }
}

const getCalculateAction = () => {
  return {
    type: CALCULATE
  }
}

export { getPushToDisplayAction, getClearDisplayAction, getCalculateAction }
