import React from 'react';
import PropTypes from 'prop-types';

import styles from './SingleOrder.scss';

const SingleOrder = (props) => (
  <div className={ styles.component }>
    <h2>SingleOrder view</h2>
    <span>{ props.match.params.id }</span>
  </div>
);

SingleOrder.propTypes = {
  match: PropTypes.object,
};

export default SingleOrder;