import React from 'react';
import Loading from '../Loading';
import WeatherList from '../WeatherList';

const LoadWeathers = (props) => {
  var loadingStatus = '';
  var weatherList = '';
  if (props.loadWeathers.get('loading')) {
    loadingStatus = <Loading/>
  } else if (props.loadWeathers.get('error')) {
    switch(props.loadWeathers.get('error').response.status){
      case 400:
        loadingStatus = <div>All province not found</div>
    }
  }
  else {
    weatherList = <WeatherList loadWeathers={props.loadWeathers}/>
  }
  return (
    <div>
      {loadingStatus}
      {weatherList}
    </div>
  )
}

export default LoadWeathers;
