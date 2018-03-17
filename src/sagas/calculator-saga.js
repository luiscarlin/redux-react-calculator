/* eslint no-eval: 0 */

import { take, call, put, select } from 'redux-saga/effects'
import { CALCULATE_TYPE } from '../actions/actionTypes'
import { getPushToDisplayAction, getClearDisplayAction } from '../actions/displayActions'
import { getDisplayValue } from '../selectors/display-selectors'

export default function* calculatorSaga() {
  while (true) {
    yield take(CALCULATE_TYPE)

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

    yield put(getClearDisplayAction())
    yield put(getPushToDisplayAction(newValueForDisplay))
  }
}
