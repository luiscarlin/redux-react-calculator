import { take, call, put, select } from 'redux-saga/effects'
import { CALCULATE } from '../actions/actionTypes'
import { pushToDisplay, clearDisplay } from '../actions/displayActions'
import { getDisplayValue } from '../selectors/display-selectors'

export default function * calculatorSaga() {
  while(true) {
    yield take(CALCULATE)
    
    const currentValueInDisplay = yield select(getDisplayValue)
    const newValueForDisplay = yield call(eval, currentValueInDisplay)
      
    yield put(clearDisplay())
    yield put(pushToDisplay(newValueForDisplay))
  }
}
