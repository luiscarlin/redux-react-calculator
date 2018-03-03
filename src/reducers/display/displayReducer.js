import { PUSH_TO_DISPLAY } from '../../actions';

export const DEFAULT_STATE = {
  display: ''
}

export default function displayReducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case PUSH_TO_DISPLAY:
      return Object.assign({}, state, { display: state.display + action.value })
  }
  return state
}
