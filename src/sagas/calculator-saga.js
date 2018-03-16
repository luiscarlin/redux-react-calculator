/* eslint no-eval: 0 */

import { take, call, put, select } from 'redux-saga/effects'
import { CALCULATE } from '../actions/actionTypes'
import { pushToDisplay, clearDisplay } from '../actions/displayActions'
import { getDisplayValue } from '../selectors/display-selectors'

export default function* calculatorSaga() {
  while (true) {
    yield take(CALCULATE)

    const currentValueInDisplay = yield select(getDisplayValue)

    if (!currentValueInDisplay) {
      continue
    }

    let newValueForDisplay

    try {
      newValueForDisplay = yield call(eval, currentValueInDisplay)
    }
    catch(e) {
      continue
    }

    yield put(clearDisplay())
    yield put(pushToDisplay(newValueForDisplay))
  }
}
