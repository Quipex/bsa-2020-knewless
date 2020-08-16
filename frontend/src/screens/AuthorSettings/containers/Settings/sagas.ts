import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as settingsService from '../../services/settings.service';
import { fetchGetAuthorSettingsRoutine, fetchSetAuthorSettingsRoutine } from '../../routines';
import { Routine } from 'redux-saga-routines';
import * as imageService from 'services/image.service';
import { fetchUserRoutine } from 'containers/AppRouter/routines';
import { fetchAuthorRoutine } from '@screens/AuthorMainPage/routines';

function* getSettings() {
  try {
    const response = yield call(settingsService.getSettings);
    if (response !== null) {
      yield put(fetchGetAuthorSettingsRoutine.success(response));
    }
  } catch (error) {
    yield put(fetchGetAuthorSettingsRoutine.failure(error?.message));
  }
}

function* watchGetAuthorSettingsRequest() {
  yield takeEvery(fetchGetAuthorSettingsRoutine.TRIGGER, getSettings);
}

function* setSettings(action: Routine<any>) {
  try {
    const author = action.payload;
    if (author?.uploadImage) {
      const { link } = yield call(() => imageService.uploadImage(author.uploadImage));
      author.avatar = link;
    }
    yield call(() => settingsService.setSettings(action.payload));
    yield put(fetchAuthorRoutine.trigger());
    yield put(fetchUserRoutine.trigger());
  } catch (error) {
    console.log('Set settings failed!');
  }
}

function* watchSetAuthorSettingsRequest() {
  yield takeEvery(fetchSetAuthorSettingsRoutine.TRIGGER, setSettings);
}

export default function* authorSettingsSagas() {
  yield all([
    watchGetAuthorSettingsRequest(),
    watchSetAuthorSettingsRequest()
  ]);
}
