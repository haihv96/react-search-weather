import React from 'react';
import {compose} from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import InputProvinceList from './InputProvinceList';
import LoadWeather from './LoadWeather';
import reducer from './reducer';
import saga from './saga';

const Weather = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <InputProvinceList />
        <LoadWeather/>
      </div>
    </div>
  </div>
)
const withReducer = injectReducer({key: 'weather', reducer});
const withSaga = injectSaga({key: 'weather', saga});

export default compose(withReducer, withSaga)(Weather);
