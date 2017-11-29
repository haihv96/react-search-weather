import React from 'react';
import PropTypes from 'prop-types';
import {FaMinus} from 'react-icons/lib/fa';

const ButtonRemove = (props) => {
  return (
    <button
      type="button"
      className="btn btn-xs btn-danger"
      onClick={() => {
        props.dispatchRemoveInputProvince(props.id)
      }}><FaMinus/> Remove </button>
  )
}

ButtonRemove.propTypes = {
  dispatchRemoveInputProvince: PropTypes.func.isRequired
}

export default ButtonRemove;
