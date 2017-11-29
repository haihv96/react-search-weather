import React from 'react';
import {connect} from 'react-redux';
import {
  addInputProvince,
  editInputProvince,
  removeInputProvince,
  convertProvinceToId,
  loadWeathers,
  convertWeather
} from './actions';
import InputProvinceList from 'components/InputProvinceList';
import LoadWeathers from 'components/LoadWeathers';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectInputProvinces,
  makeSelectLoadWeathers,
  selectIdsInputProvinceFail,
  selectWeatherConverted
} from './selector';
import {Panel} from './style';

const Weather = (props) => {
  return (
    <div className="container-fluid">
      <Panel className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title text-center">Weathers Search</h2>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <Panel className="panel panel-info">
                <div className="panel-heading">
                  <h2 className="panel-title text-center">Input Provinces</h2>
                </div>
                <div className="panel-body">
                  <InputProvinceList {...props}/>
                </div>
              </Panel>
            </div>
            <div className="col-md-6">
              <Panel className="panel panel-success">
                <div className="panel-heading">
                  <h2 className="panel-title text-center">Results</h2>
                </div>
                <div className="panel-body">
                  <LoadWeathers loadWeathers={props.loadWeathers}
                                argTemp={props.loadWeathers.get('argTemp')}
                                dispatchConvertWeather={props.dispatchConvertWeather}
                                converted={props.converted}/>
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  inputProvinces: makeSelectInputProvinces(),
  idsInputProvinceFail: selectIdsInputProvinceFail(),
  loadWeathers: makeSelectLoadWeathers(),
  converted: selectWeatherConverted()
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddInputProvince: () => {
      dispatch(addInputProvince());
    },
    dispatchEditInputProvince: (provinceId, provinceName) => {
      dispatch(editInputProvince(provinceId, provinceName));
    },
    dispatchRemoveInputProvince: (provinceId) => {
      dispatch(removeInputProvince(provinceId))
    },
    dispatchConvertProvinceId: (results) => {
      dispatch(convertProvinceToId(results));
    },
    dispatchLoadWeathers: () => {
      dispatch(loadWeathers());
    },
    dispatchConvertWeather: (weathersConverted) => {
      dispatch(convertWeather(weathersConverted));
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'weather', reducer});
const withSaga = injectSaga({key: 'weather', saga});

export default compose(withReducer, withSaga, withConnect)(Weather);
