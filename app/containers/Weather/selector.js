import {createSelector} from 'reselect';

const selectWeather = state => state.get('weather');

const makeSelectInputProvinces = () => createSelector(
  selectWeather,
  (weatherState) => weatherState.get('inputProvinces')
);

const makeSelectLoadWeathers = () => createSelector(
  selectWeather,
  (weatherState) => weatherState.get('loadWeathers')
);

export {makeSelectInputProvinces, makeSelectLoadWeathers};
