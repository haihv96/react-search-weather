import React from 'react';
import GoogleMapWeather from '../GoogleMapWeather';
import {Wrapper} from './style';

class weatherDetail extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Wrapper>
          <div className="row">
            <div className="col-md-3">
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
            <div className="col-md-9">
              <GoogleMapWeather
                weather={this.props.weather}
                isOpenInfoWindow={this.props.isOpenInfoWindow}
                dispatchToggleMarker={this.props.dispatchToggleMarker}
              />
            </div>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default weatherDetail;
