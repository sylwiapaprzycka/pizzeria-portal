import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewEvents.scss';


const NewEvents = (props) => (
  <div className={ styles.component }>
    <h2>NewEvents view</h2>
    <span>{ props.match.params.id }</span>
  </div>
);

NewEvents.propTypes = {
  match: PropTypes.object,
};

export default NewEvents;