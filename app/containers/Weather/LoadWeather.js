import React from 'react';
import {connect} from 'react-redux';
import LoadWeathers from 'components/LoadWeathers';
import {createStructuredSelector} from 'reselect';
import {makeSelectLoadWeathers} from './selector';

const mapStateToProps = createStructuredSelector({
  loadWeathers: makeSelectLoadWeathers()
});

export default connect(mapStateToProps, null)(LoadWeathers)
