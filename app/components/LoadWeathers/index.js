import React from 'react';
import Loading from '../Loading';
import WeatherList from '../WeatherList';
import {convertWeatherProperty} from 'utils/weather';

class LoadWeathers extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.loadWeathers.get('weathersData')
      != nextProps.loadWeathers.get('weathersData')
    ) {
      this.props.dispatchConvertWeather(
        convertWeatherProperty(
          this.props,
          nextProps.loadWeathers.get('weathersData')
        )
      );
    }
  }

  render() {
    var loadingStatus = '';
    var weatherList = '';
    if (this.props.loadWeathers.get('loading')) {
      loadingStatus = <Loading/>
    } else if (this.props.loadWeathers.get('error')) {
      switch (this.props.loadWeathers.get('error').response.status) {
        case 400:
          loadingStatus = <div>All province not found</div>
      }
    }
    else {
      weatherList = <WeatherList weathersData={this.props.loadWeathers.get('weathersData')}
      />
    }
    return (
      <div>
        {loadingStatus}
        {weatherList}
      </div>
    )
  }
}

export default LoadWeathers;
