import { PUSH_TO_DISPLAY_TYPE, CLEAR_DISPLAY_TYPE } from '../../actions'

export const DEFAULT_STATE = {
  display: ''
}

export default function displayReducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case PUSH_TO_DISPLAY_TYPE:
      return Object.assign({}, state, { display: state.display + action.value })
    case CLEAR_DISPLAY_TYPE:
      return Object.assign({}, state, { display: '' })
    default:
      return state
  }
}
