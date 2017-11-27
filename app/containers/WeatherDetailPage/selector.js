import {createSelector} from 'reselect';

const weatherDetail = state => state.get('weatherDetail');

export const selectLoadWeather = () => createSelector(
  weatherDetail,
  (weather) => weather
);

export const selectProvinceId = () => createSelector(
  weatherDetail,
  (weather) => weather.get('provinceId')
);
