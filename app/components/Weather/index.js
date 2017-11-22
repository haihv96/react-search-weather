import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Weather = ({weather}) => {
  return (
    <div className="col-md-4">
      {
        weather.weather.map((weather, index) => (
          <img key={index} className="card-img-top"
               src={`http://openweathermap.org/img/w/${weather.icon}.png`}
               alt={weather.description}/>
        ))
      }
      <div className="card-block">
        <h3 className="card-title">{weather.name ? weather.name : `none`} - {weather.sys.country}</h3>
        <p className="card-text">wind: {weather.wind.speed}</p>
      </div>
    </div>
  )
}

export default Weather;
