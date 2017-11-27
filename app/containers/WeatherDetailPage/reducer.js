import {
  LOAD_WEATHER,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
  LOAD_PROVINCE_ID,
  CONVERT_WEATHER_DETAIL
} from './constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
  loading: true,
  error: false,
  provinceId: null,
  weatherData: null
});

const weatherDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROVINCE_ID:
      return state.set('provinceId', action.provinceId);
    case LOAD_WEATHER:
      return state.set('loading', true);
    case LOAD_WEATHER_SUCCESS:
      return state.set('loading', true).set('weatherData', action.weather);
    case LOAD_WEATHER_ERROR:
      return state.set('loading', false).set('error', action.error);
    case CONVERT_WEATHER_DETAIL:
      return state.set('loading', false).set('weatherData', action.weatherConverted);
    default:
      return state;
  }
};

export default weatherDetailReducer;
