import React from 'react';
import {connect} from 'react-redux';
import {
  addInputProvince,
  editInputProvince,
  removeInputProvince,
  loadWeathers
} from './actions';
import InputProvinceList from 'components/InputProvinceList';
import {createStructuredSelector} from 'reselect';
import {makeSelectInputProvinces} from './selector';

const mapStateToProps = createStructuredSelector({
  inputProvinces: makeSelectInputProvinces()
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

export default connect(mapStateToProps, mapDispatchToProps)(InputProvinceList)
