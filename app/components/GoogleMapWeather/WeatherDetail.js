import React from 'react';

const weatherDetail = (props) => {
    return (
      <div>
        <div className="card-block">
          <h3 className="card-title">{props.weather.name ? props.weather.name : `none`}
            - {props.weather.sys.country}</h3>
          <p className="card-text">
            temperature: {props.weather.main.temp} &#8451;
            ({props.weather.main.temp_min} - {props.weather.main.temp_max} &#8451;)
          </p>
          <p className="card-text">wind: {props.weather.wind.speed} km/h</p>
          <p className="card-text">visibility: {props.weather.visibility} km</p>
        </div>
      </div>
    )
};

export default weatherDetail;
