import React from 'react';
import LoadWeather from 'components/LoadWeather';
import {
  loadProvinceId,
  loadWeather,
  convertWeatherDetail
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

class WeatherDetailPage extends React.Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/">Go to home</Link>
        <LoadWeather
          loadWeather={this.props.loadWeather}
          dispatchLoadWeather={this.props.dispatchLoadWeather}
          provinceId={this.props.match.params.id}
          dispatchConvertWeatherDetail={this.props.dispatchConvertWeatherDetail}
        />
      </div>
    )
  }
}
;

const mapStateToProps = createStructuredSelector({
  loadWeather: selectLoadWeather(),
  provinceId: selectProvinceId()
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadProvinceId: (provinceId) => {
      dispatch(loadProvinceId(provinceId));
    },
    dispatchLoadWeather: (provinceId) => {
      dispatch(loadWeather(provinceId));
    },
    dispatchConvertWeatherDetail: (weatherConverted) => {
      dispatch(convertWeatherDetail(weatherConverted));
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'weatherDetail', reducer});
const withSaga = injectSaga({key: 'weatherDetail', saga});

export default compose(withReducer, withSaga, withConnect)(WeatherDetailPage);
