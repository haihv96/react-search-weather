import {call, put, select, takeLatest} from 'redux-saga/effects';
import {LOAD_WEATHERS} from './constants';
import {weathersLoaded, weatherLoadingError} from './actions';
import request from 'utils/request';
import {selectIdsProvince, selectIdsInputProvinceFail} from './selector';

export function* getWeathers() {
  try {
    const idsProvince = yield select(selectIdsProvince());
    const idsInputProvinceFail = yield select(selectIdsInputProvinceFail());
    const requestUrl = `http://api.openweathermap.org/data/2.5/group?id=${
      idsProvince.join(',')}&units=metric&appid=b5697f67976b3b6beabb66062be75a11`;
    const weathers = yield call(request, requestUrl);
    yield put(weathersLoaded(weathers.list));
  } catch (err) {
    yield put(weatherLoadingError(err));
  }
}

export default function* weathersData() {
  yield takeLatest(LOAD_WEATHERS, getWeathers);
}
