import { PUSH_TO_DISPLAY } from './'

const pushToDisplay = (char) => {
  return {
    type: PUSH_TO_DISPLAY,
    value: char
  }
}

export { pushToDisplay }