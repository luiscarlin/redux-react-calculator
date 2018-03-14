import { takeEvery, put } from 'redux-saga/effects'
import { CALCULATE } from '../actions/actionTypes'
import { pushToDisplay, clearDisplay } from '../actions/displayActions'

function * calculate(action) {
  // pull the current value
  // calculate the actual result 
  // if success 
  yield put(clearDisplay())
  yield put(pushToDisplay("hello from the other side"))

  // if failure
  // send an error action to the reducer
}

export default function * calculatorSaga() {
  yield takeEvery(CALCULATE, calculate);
}
