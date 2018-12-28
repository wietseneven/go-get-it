import React from 'react';
import PropTypes from 'prop-types';

import s from './Led.module.css';

const Led = ({ color }) => (
  <div className={s.root}>
    <div style={{ backgroundColor: color }} className={s.bulb} />
  </div>
);

Led.propTypes = {
  color: PropTypes.string,
};

Led.defaultProps = {
  color: '#ff0000',
};

export default Led;
