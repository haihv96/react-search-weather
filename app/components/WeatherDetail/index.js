import React from 'react';

class weatherDetail extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        {
          this.props.weather.weather.map((weather, index) => (
            <img key={index} className="card-img-top"
                 src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                 alt={weather.description}/>
          ))
        }
        <div className="card-block">
          <h3 className="card-title">{this.props.weather.name ? this.props.weather.name : `none`}
            - {this.props.weather.sys.country}</h3>
          <p className="card-text">
            temperature: {this.props.weather.main.temp} &#8451;
            ({this.props.weather.main.temp_min} - {this.props.weather.main.temp_max} &#8451;)
          </p>
          <p className="card-text">wind: {this.props.weather.wind.speed} km/h</p>
          <p className="card-text">visibility: {this.props.weather.visibility} km</p>
        </div>
      </div>
    )
  }
}

export default weatherDetail;
