import { call, takeEvery } from 'redux-saga/effects'

function* runfunction(action) {
  yield call(console.log, "hello")
}

function* mySaga() {
  yield takeEvery("PROCESS_DISPLAY", runfunction);
}

export default mySaga