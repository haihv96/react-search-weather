import React from 'react';
import ButtonRemove from './ButtonRemove';
import PropTypes from 'prop-types';

const InputProvince = (props) => {
  if (props.canRemove === true) {
    var buttonRemove = <ButtonRemove {...props}/>;
  } else {
    var buttonRemove = '';
  }
  return (
    <div>
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              props.dispatchEditInputProvince(props.id, e.target.value)
            }}/>
          {buttonRemove}
        </div>
      </div>
    </div>
  )
}

InputProvince.propTypes = {
  canRemove: PropTypes.bool.isRequired
}

export default InputProvince
