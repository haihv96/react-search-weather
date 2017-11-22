import React from 'react';
import PropTypes from 'prop-types';
import ImmutalbePropTypes from 'react-immutable-proptypes';
import Weather from '../Weather';

const WeatherList = ({loadWeathers}) => {
  return (
    <div>
      {
        loadWeathers.get('weathersData').map((weather, index) => (
          <Weather key={index} weather={weather}/>
        ))
      }
    </div>
  )
}

WeatherList.propTypes = {}

// WeatherList.propTypes = {
//   loadWeathers: ImmutalbePropTypes.contains({
//     weathersData: ImmutalbePropTypes.list.isRequired
//   }).isRequired
// }

export default WeatherList;
