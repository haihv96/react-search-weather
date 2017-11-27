import React from 'react';
import PropTypes from 'prop-types';
import ImmutalbePropTypes from 'react-immutable-proptypes';
import Weather from '../Weather';

class WeatherList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.weathersData.map((weather, index) => (
            <Weather key={index} weather={weather}/>
          ))
        }
      </div>
    )
  }
}

WeatherList.propTypes = {}

WeatherList.propTypes = {
  weathersData: ImmutalbePropTypes.list.isRequired
}

export default WeatherList;
