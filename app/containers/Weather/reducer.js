import {fromJS, List} from 'immutable';

import {
  ADD_INPUT_PROVINCE,
  EDIT_INPUT_PROVINCE,
  REMOVE_INPUT_PROVINCE,
  CONVERT_PROVINCE_TO_ID,
  LOAD_WEATHERS,
  LOAD_WEATHERS_SUCCESS,
  LOAD_WEATHERS_ERROR,
  CONVERT_WEATHER
} from './constants';

const initialState = fromJS({
  inputProvinces: [{id: 0, name: ''}],
  loadWeathers: {
    inputProvinceName: '',
    loading: false,
    converted: false,
    error: false,
    argTemp: 20,
    weathersData: [],
    idsProvince: [],
    idsInputProvinceFail: []
  }
});

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT_PROVINCE:
      return state.set(
        'inputProvinces',
        state.get('inputProvinces').push(fromJS(action.province))
      );
    case EDIT_INPUT_PROVINCE:
      const index = state.get('inputProvinces').findIndex(inputProvince => (
        inputProvince.get('id') == action.provinceId
      ));
      return state.setIn(['inputProvinces', index, 'name'], action.provinceName);
    case REMOVE_INPUT_PROVINCE:
      return state.set(
        'inputProvinces',
        state.get('inputProvinces').filter(province => province.get('id') !== action.provinceId)
      );
    case CONVERT_PROVINCE_TO_ID:
      return state.setIn(['loadWeathers', 'loading'], true)
        .setIn(['loadWeathers', 'idsProvince'], action.results.idsProvince)
        .setIn(['loadWeathers', 'idsInputProvinceFail'], action.results.idsInputProvinceFail);
    case LOAD_WEATHERS:
      return state.setIn(['loadWeathers', 'loading'], true);
    case LOAD_WEATHERS_SUCCESS:
      return state.setIn(['loadWeathers', 'loading'], true)
        .setIn(['loadWeathers', 'error'], false)
        .setIn(['loadWeathers', 'weathersData'], List(action.weathers));
    case LOAD_WEATHERS_ERROR:
      return state.setIn(['loadWeathers', 'loading'], false)
        .setIn(['loadWeathers', 'error'], action.error);
    case CONVERT_WEATHER:
      return state.setIn(['loadWeathers', 'loading'], false)
        .setIn(['loadWeathers', 'weathersData'], List(action.weathersConverted))
        .setIn(['loadWeathers', 'converted'], true);
    default:
      return state;
  }
}

export default weatherReducer;
