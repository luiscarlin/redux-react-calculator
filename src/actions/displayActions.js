import { PUSH_TO_DISPLAY_TYPE, CLEAR_DISPLAY_TYPE, CALCULATE_TYPE } from './'

const getPushToDisplayAction = (char) => {
  return {
    type: PUSH_TO_DISPLAY_TYPE,
    value: char
  }
}

const getClearDisplayAction = () => {
  return {
    type: CLEAR_DISPLAY_TYPE
  }
}

const getCalculateAction = () => {
  return {
    type: CALCULATE_TYPE
  }
}

export { getPushToDisplayAction, getClearDisplayAction, getCalculateAction }
