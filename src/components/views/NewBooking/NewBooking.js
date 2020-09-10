import React from 'react';
import PropTypes from 'prop-types';

import style from './NewBooking.scss';


function NewBooking (props) {
  return (
    <div className={ style.component }>
      <h2>NewBooking view</h2>
      <span>{ props.match.params.id }</span>
    </div>
  );
}

NewBooking.propTypes = {
  match: PropTypes.object,
};

export default NewBooking;