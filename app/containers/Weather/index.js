import React from 'react';
import {connect} from 'react-redux';
import {
  addInputProvince,
  editInputProvince,
  removeInputProvince,
  loadWeathers
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
  selectIdsInputProvinceFail
} from './selector';

const Weather = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <InputProvinceList {...props}/>
        <LoadWeathers {...props}/>
      </div>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  inputProvinces: makeSelectInputProvinces(),
  idsInputProvinceFail: selectIdsInputProvinceFail(),
  loadWeathers: makeSelectLoadWeathers()
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
    dispatchLoadWeathers: () => {
      dispatch(loadWeathers());
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'weather', reducer});
const withSaga = injectSaga({key: 'weather', saga});

export default compose(withReducer, withSaga, withConnect)(Weather);
