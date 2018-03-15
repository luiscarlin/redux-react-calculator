import { takeEvery, call, put, select } from 'redux-saga/effects'
import { CALCULATE } from '../actions/actionTypes'
import { pushToDisplay, clearDisplay } from '../actions/displayActions'

function * calculate(action) {
  const currentValueInDisplay = yield select(state => state.displayReducer.display)

  try {
    const newValueForDisplay = yield call(eval, currentValueInDisplay)
    
    yield put(clearDisplay())
    yield put(pushToDisplay(newValueForDisplay))

  }
  catch(e) {
    console.log('error here. Send error action here', e)
  }
}

export default function * calculatorSaga() {
  yield takeEvery(CALCULATE, calculate);
}
