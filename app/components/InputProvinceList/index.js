import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import InputProvince from '../InputProvince';

const InputProvinceList = (props) => {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      props.dispatchLoadWeathers();
    }}>
      {
        props.inputProvinces.map(inputProvince => (
          <InputProvince
            key={inputProvince.get('id')}
            id={inputProvince.get('id')}
            canRemove={props.inputProvinces.size <= 1 ? false : true}
            {...props}
          />
        ))
      }
      <button
        className="btn btn-primary" type="button"
        onClick={e => {
          e.preventDefault();
          props.dispatchAddInputProvince();
        }}>
        Add Input Provice
      </button>
      <button type="submit" className="btn btn-primary">Search Wheather</button>
    </form>
  )
}

InputProvinceList.propTypes = {
  inputProvinces: ImmutablePropTypes.listOf(
    ImmutablePropTypes.mapContains({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  dispatchAddInputProvince: PropTypes.func.isRequired,
  dispatchLoadWeathers: PropTypes.func.isRequired,
}

export default InputProvinceList;