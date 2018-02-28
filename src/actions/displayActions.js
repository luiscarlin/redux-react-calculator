import * as actionTypes from './actionTypes'

export function pushToDisplay(char) {
  return {
    type: actionTypes.PUSH_TO_DISPLAY,
    value: char
  }
}