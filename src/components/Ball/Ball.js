import React from 'react';
import s from './Ball.module.css';

const Ball = () => (
  <figure className={s.root}>
    <span className={s.shadow} />
  </figure>
);

export default Ball;
