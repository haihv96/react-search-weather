import React from 'react';
import WeatherDetail from '../WeatherDetail';
import Loading from '../Loading';
import {convertWeatherDetailProperty} from 'utils/weatherDetail';

class LoadWeather extends React.Component {
  componentWillMount() {
    this.props.dispatchLoadWeather(this.props.provinceId);
  }

  render() {
    var loadingStatus = '';
    var weatherDetail = '';
    if (this.props.loadWeather.get('loading')) {
      loadingStatus = <Loading/>
    } else if (this.props.loadWeather.get('error')) {
      switch (this.props.loadWeather.get('error').response.status) {
        case 404:
          loadingStatus = <div>Province not found</div>
      }
    }
    else {
      weatherDetail = <WeatherDetail weather={this.props.loadWeather.get('weatherData')}/>
    }
    return (
      <div>
        {loadingStatus}
        {weatherDetail}
      </div>
    )
  }
}

export default LoadWeather;
