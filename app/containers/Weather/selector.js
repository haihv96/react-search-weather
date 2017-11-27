import {createSelector} from 'reselect';

const selectWeather = state => state.get('weather');

export const makeSelectInputProvinces = () => createSelector(
  selectWeather,
  (weatherState) => weatherState.get('inputProvinces')
);

export const makeSelectLoadWeathers = () => createSelector(
  selectWeather,
  (weatherState) => weatherState.get('loadWeathers')
);

export const selectIdsInputProvinceFail = () => createSelector(
  selectWeather,
  (weatherState) => weatherState.getIn(['loadWeathers', 'idsInputProvinceFail'])
);

export const selectIdsProvince = () => createSelector(
  selectWeather,
  (weatherState) => weatherState.getIn(['loadWeathers', 'idsProvince'])
)

export const selectWeatherConverted = () => createSelector(
  selectWeather,
  (weatherState) => weatherState.getIn(['loadWeathers', 'converted'])
)
