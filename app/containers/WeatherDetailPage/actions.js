import {
  LOAD_WEATHER,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
  CONVERT_WEATHER_DETAIL,
  TOGGLE_MARKER
} from './constants';

export const loadWeather = (provinceId) => {
  return {
    type: LOAD_WEATHER,
    provinceId
  }
};

export const weatherLoaded = (weather) => {
  return {
    type: LOAD_WEATHER_SUCCESS,
    weather
  }
};

export const weatherLoadingError = (error) => {
  return {
    type: LOAD_WEATHER_ERROR,
    error
  }
};

export const convertWeatherDetail = (weatherConverted) => {
  return {
    type: CONVERT_WEATHER_DETAIL,
    weatherConverted
  }
};

export const toggleMarker = (isOpenInfoWindow) => {
  return {
    type: TOGGLE_MARKER,
    isOpenInfoWindow
  }
};
