import React from 'react';
import ButtonRemove from './ButtonRemove';
import PropTypes from 'prop-types';
import {Input} from './style';

class InputProvince extends React.Component {
  render() {
    var buttonRemove = this.props.canRemove ? <ButtonRemove {...this.props}/> : '';
    return (
      <div>
        <div className={`form-inline ${this.props.fail ? 'has-error' : ''}`}>
          <div className="form-group">
            <Input
              type="text"
              className="form-control"
              value={this.props.name}
              innerRef={input => {this.inputProvince = input}}
              onChange={(e) => {
                this.props.dispatchEditInputProvince(this.props.id, e.target.value)
              }}/>
            {buttonRemove}
          </div>
        </div>
      </div>
    )
  }
}
;

InputProvince.propTypes = {
  canRemove: PropTypes.bool.isRequired
};

export default InputProvince;
