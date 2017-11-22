import React from 'react';
import PropTypes from 'prop-types';

const ButtonRemove = (props) => {
  return (
    <button
      type="button"
      className="btn btn-xs btn-danger"
      onClick={() => {
        props.dispatchRemoveInputProvince(props.id)
      }}> - Remove </button>
  )
}

ButtonRemove.propTypes = {
  dispatchRemoveInputProvince: PropTypes.func.isRequired
}

export default ButtonRemove;
