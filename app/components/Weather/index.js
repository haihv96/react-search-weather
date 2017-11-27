import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

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
        <p className="card-text">
          temperature: {weather.main.temp} &#8451;
          ({weather.main.temp_min} - {weather.main.temp_max} &#8451;)
        </p>
        <p className="card-text">
          {weather.diffArgTemp > 0 ? 'increase' : 'reduction'} :
          {Math.abs(weather.diffArgTemp)}
          &#8451;
        </p>
        <p className="card-text">wind: {weather.wind.speed} km/h</p>
        <p className="card-text">visibility: {weather.visibility} km</p>
        <h4><Link to={`/weather/${weather.id}`}>Detail</Link></h4>
      </div>
    </div>
  )
}

export default Weather;
