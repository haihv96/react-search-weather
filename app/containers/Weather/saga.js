import {call, put, select, takeLatest} from 'redux-saga/effects';
import {LOAD_WEATHERS} from './constants';
import {weathersLoaded, weatherLoadingError} from './actions';
import request from 'utils/request';
import {makeSelectInputProvinces} from './selector';
import {provincesTxt} from './provincesTxt';

export function* getWeathers() {
  try {
    const inputProvinces = yield select(makeSelectInputProvinces());
    const ids = inputProvincesToId(inputProvinces, provincesTxt);
    const requestUrl = `http://api.openweathermap.org/data/2.5/group?id=${
      ids.join(',')
      }&units=metric&appid=b5697f67976b3b6beabb66062be75a11`;
    const weathers = yield call(request, requestUrl);
    yield put(weathersLoaded(weathers.list));
  } catch (err) {
    yield put(weatherLoadingError(err));
  }
}

export default function* weathersData() {
  yield takeLatest(LOAD_WEATHERS, getWeathers);
}

function inputProvincesToId(inputProvinces, provincesTxt) {
  let ids = [];
  inputProvinces.forEach(inputProvince => {
    let index = provincesTxt.indexOf(inputProvince.get('name').toLowerCase());
    if (![0, -1].includes(index)) {
      ids.push(provincesTxt.slice(index - 50, index).trim().split(' ').splice(-1));
    }
  });
  return ids;
}
