import { select, take, takeEvery, call } from 'redux-saga/effects';

import { trackPage } from '../helpers/fakeTracker';
import { FETCH_PERSON_SUCCESS, LOCATION_CHANGE } from './actionTypes';

function* trackPageViewSaga(action) {
  if (action.location.pathname === '/') {
    yield call(trackPage, 'Index page');
  } else {
    const personId = action.location.pathname.split('/')[2];

    let personData = yield select(state =>
      state.people.find(p => p.id === personId)
    );

    if (!personData) {
      // wait for the action that will return data
      yield take(FETCH_PERSON_SUCCESS);

      personData = yield select(state =>
        state.people.find(p => p.id === personId)
      );
    }

    yield call(trackPage, personData.name)
  }
}

function* trackingSaga() {
  // every time LOCATION_CHANGE is dispatched in the app call the 'worker' saga
  yield takeEvery(LOCATION_CHANGE, trackPageViewSaga);
}

export default trackingSaga;
