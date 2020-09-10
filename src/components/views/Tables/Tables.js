import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Tables.scss';

const Tables = () => (
  <div className={ styles.component }>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`}> Booking id </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}> New Booking </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/123`}> Event id </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}> New Event </Link>
  </div>
);

export default Tables;