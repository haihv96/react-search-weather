import React from 'react';
import {compose, withProps, withHandlers} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import InfoWindowPopup from './InfoWindowPopup';
import {GOOGLE_API_KEY} from "./constants";

const GoogleMapWeather = (props) => (
  <GoogleMap defaultZoom={7} defaultCenter={props.weather.gmapCoord.defaultCenter}>
    <Marker
      position={props.weather.gmapCoord.markerPosition}
      onClick={() => {
        props.dispatchToggleMarker(!props.isOpenInfoWindow)
      }}
    >
      {props.isOpenInfoWindow && <InfoWindow>
        <InfoWindowPopup weather={props.weather}/>
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);

const defaultProps = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
    GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{height: `100%`}}/>,
  containerElement: <div style={{height: `400px`}}/>,
  mapElement: <div style={{height: `100%`}}/>
};

export default compose(
  withProps(defaultProps),
  withScriptjs,
  withGoogleMap
)(GoogleMapWeather);
