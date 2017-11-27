import {
  LOAD_WEATHER,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
  LOAD_PROVINCE_ID,
  CONVERT_WEATHER_DETAIL
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

export const loadProvinceId = (provinceId) => {
  return {
    type: LOAD_PROVINCE_ID,
    provinceId
  }
};

export const convertWeatherDetail = (weatherConverted) => {
  return {
    type: CONVERT_WEATHER_DETAIL,
    weatherConverted
  }
};
