import React from 'react';
import ButtonRemove from './ButtonRemove';
import PropTypes from 'prop-types';

const InputProvince = (props) => {
  var buttonRemove = props.canRemove ? <ButtonRemove {...props}/> : '';
  return (
    <div>
      <div className={`form-inline ${props.fail ? 'has-error' : ''}`}>
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
};

InputProvince.propTypes = {
  canRemove: PropTypes.bool.isRequired
};

export default InputProvince;
