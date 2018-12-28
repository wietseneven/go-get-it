import React from 'react';
import PropTypes from 'prop-types';

import s from './Box.module.css';

const Box = ({ children }) => <div className={s.root}>{children}</div>;

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Box;
