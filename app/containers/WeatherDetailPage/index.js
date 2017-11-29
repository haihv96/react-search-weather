import React from 'react';
import LoadWeather from 'components/LoadWeather';
import {
  loadWeather,
  convertWeatherDetail,
  toggleMarker
} from './actions';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {selectLoadWeather, selectProvinceId} from './selector';
import {createStructuredSelector} from 'reselect';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import {Link} from 'react-router-dom';
import {Panel, Button} from './style';
import {FaArrowCircleLeft} from 'react-icons/lib/fa';

class WeatherDetailPage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Panel className="panel panel-success">
              <div className="panel-heading">
                <h2 className="panel-title text-center">Weather Detail</h2>
              </div>
              <div className="panel-body">
                <Button>
                  <Link className="btn btn-primary" to="/"><FaArrowCircleLeft/> back home</Link>
                </Button>
                <LoadWeather
                  loadWeather={this.props.loadWeather}
                  dispatchLoadWeather={this.props.dispatchLoadWeather}
                  provinceId={this.props.match.params.id}
                  dispatchConvertWeatherDetail={this.props.dispatchConvertWeatherDetail}
                  dispatchToggleMarker={this.props.dispatchToggleMarker}
                />
              </div>
            </Panel>
          </div>
        </div>
      </div>
    )
  }
}
;

const mapStateToProps = createStructuredSelector({
  loadWeather: selectLoadWeather(),
  provinceId: selectProvinceId(),
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadWeather: (provinceId) => {
      dispatch(loadWeather(provinceId));
    },
    dispatchConvertWeatherDetail: (weatherConverted) => {
      dispatch(convertWeatherDetail(weatherConverted));
    },
    dispatchToggleMarker: (isOpenInfoWindow) => {
      dispatch(toggleMarker(isOpenInfoWindow));
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'weatherDetail', reducer});
const withSaga = injectSaga({key: 'weatherDetail', saga});

export default compose(withReducer, withSaga, withConnect)(WeatherDetailPage);
