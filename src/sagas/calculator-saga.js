import { takeEvery, put } from 'redux-saga/effects'
import { CALCULATE } from '../actions/actionTypes'
import { pushToDisplay, clearDisplay } from '../actions/displayActions'


function * calculate(action) {
  yield put(clearDisplay())
}

export default function * calculatorSaga() {
  yield takeEvery(CALCULATE, calculate);
}
