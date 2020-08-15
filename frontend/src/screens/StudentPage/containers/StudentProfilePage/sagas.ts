import { takeEvery, put, call, all } from 'redux-saga/effects';
import * as settingsService from '../../services/student.service';
import { fetchGetStudentProfileRoutine } from '../../routines';
import { duration } from 'moment';

function* getStudentProfile() {
  try {
    const response = yield call(settingsService.getStudentProfile);
    console.log(response);
    if (response !== null) {
      yield put(fetchGetStudentProfileRoutine.success(response));
    }
  } catch (error) {
    yield put(fetchGetStudentProfileRoutine.failure(error?.message));
  }
}

function* watchGetStudentProfileRequest() {
  yield takeEvery(fetchGetStudentProfileRoutine.TRIGGER, getStudentProfile);
}

export default function* studentProfileSagas() {
  yield all([
    watchGetStudentProfileRequest()
  ]);
}
