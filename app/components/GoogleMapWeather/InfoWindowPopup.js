import React from 'react';
import WeatherDetail from './WeatherDetail';

const InfoWindowPopup = ({weather}) => (
  <div>
    <WeatherDetail weather={weather} />
  </div>
);

export default InfoWindowPopup;
