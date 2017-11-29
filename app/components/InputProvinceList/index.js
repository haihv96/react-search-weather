import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import InputProvince from '../InputProvince';
import {provincesTxt} from './provincesTxt';
import {convertIdsProvince} from 'utils/weather';
import {
  Wrapper,
  Button
} from './style';

import {FaPlus, FaSearch} from 'react-icons/lib/fa'

class InputProvinceList extends React.Component {
  handleSubmitForm(e) {
    e.preventDefault();
    let convertResult = convertIdsProvince(this.props.inputProvinces, provincesTxt);
    if (convertResult.idsInputProvinceFail.length != 0) {
      this.refs[`inputProvince_${convertResult.idsInputProvinceFail[0]}`].inputProvince.focus();
    }
    this.props.dispatchConvertProvinceId(convertResult);
    this.props.dispatchLoadWeathers();
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={e => {
          this.handleSubmitForm(e)
        }}>

          {
            this.props.inputProvinces.map(inputProvince => (
              <InputProvince
                key={inputProvince.get('id')}
                id={inputProvince.get('id')}
                name={inputProvince.get('name')}
                ref={`inputProvince_${inputProvince.get('id')}`}
                canRemove={this.props.inputProvinces.size <= 1 ? false : true}
                fail={this.props.idsInputProvinceFail.includes(inputProvince.get('id'))}
                {...this.props}
              />
            ))
          }
          <Button
            className="btn btn-primary" type="button"
            onClick={() => {this.props.dispatchAddInputProvince()}}>
            <FaPlus/> Add Province
          </Button>
          <Button type="submit" className="btn btn-success">
            <FaSearch/> Search Wheather
          </Button>
        </form>
      </Wrapper>
    )
  }
}
;

InputProvinceList.propTypes = {
  inputProvinces: ImmutablePropTypes.listOf(
    ImmutablePropTypes.mapContains({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  dispatchAddInputProvince: PropTypes.func.isRequired,
  dispatchLoadWeathers: PropTypes.func.isRequired,
};

export default InputProvinceList;
