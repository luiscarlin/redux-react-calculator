import { PUSH_TO_DISPLAY } from '../actions/actionTypes';

export const DEFAULT_STATE = {
  hello: ''
}

export default function helloReducer (state = DEFAULT_STATE, action) {
  let newState = state

  switch (action.type) {
    case PUSH_TO_DISPLAY:
      let newState = Object.assign({}, state, { hello: '1'})
      //console.log('push to display - new state', newState)
      return newState
  }
  return newState
}
