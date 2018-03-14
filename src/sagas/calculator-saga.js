import { takeEvery, put } from 'redux-saga/effects'
import { CALCULATE } from '../actions/actionTypes'
import { pushToDisplay, clearDisplay } from '../actions/displayActions'

function * calculate(action) {
  yield put(clearDisplay())
  yield(put(pushToDisplay("hello from the other side")))
}

export default function * calculatorSaga() {
  yield takeEvery(CALCULATE, calculate);
}
