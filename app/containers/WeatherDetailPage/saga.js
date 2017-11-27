import {call, put, takeLatest} from 'redux-saga/effects';
import {LOAD_WEATHER} from './constants';
import {
  weatherLoaded,
  weatherLoadingError,
  convertWeatherDetail
} from './actions';
import request from 'utils/request';
import {convertWeatherDetailProperty} from 'utils/weatherDetail';

function* getWeather({provinceId}) {
  try {
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?id=${
      provinceId}&appid=b5697f67976b3b6beabb66062be75a11`;
    const weather = yield call(request, requestUrl);
    yield put(weatherLoaded(weather));
    yield put(convertWeatherDetail(convertWeatherDetailProperty(weather)));
  } catch (error) {
    yield put(weatherLoadingError(error));
  }
}

export default function* weatherDetail() {
  yield takeLatest(LOAD_WEATHER, getWeather);
}
