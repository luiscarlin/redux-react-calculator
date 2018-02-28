import initialState from './initialState';
import { PUSH_TO_DISPLAY } from '../actions/actionTypes';

export default function display (state = initialState.display, action) {
  switch (action.type) {
    case 'PUSH_TO_DISPLAY':
      return Object.assign({}, state, { display: '1'})
  }
  return state
}
