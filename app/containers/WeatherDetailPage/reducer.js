import {
  LOAD_WEATHER,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
  CONVERT_WEATHER_DETAIL,
  TOGGLE_MARKER
} from './constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
  loading: true,
  error: false,
  provinceId: null,
  weatherData: null,
  googleMap: {
    isOpenInfoWindow: false
  }
});

const weatherDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return state.set('loading', true);
    case LOAD_WEATHER_SUCCESS:
      return state.set('loading', true).set('weatherData', action.weather);
    case LOAD_WEATHER_ERROR:
      return state.set('loading', false).set('error', action.error);
    case CONVERT_WEATHER_DETAIL:
      return state.set('loading', false).set('weatherData', action.weatherConverted);
    case TOGGLE_MARKER:
      return state.setIn(['googleMap', 'isOpenInfoWindow'], action.isOpenInfoWindow);
    default:
      return state;
  }
};

export default weatherDetailReducer;
