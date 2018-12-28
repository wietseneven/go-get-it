import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import s from './Matrix.module.css';

import Led from '../Led';

class Matrix extends Component {
  static propTypes = {
    leds: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { leds = [], children } = this.props;

    return (
      <div className={s.root}>
        <div className={s.grid}>
          {leds.map((e, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Led color={e} key={i} />
          ))}
        </div>
        {children}
      </div>
    );
  }
}

export default inject('leds')(observer(Matrix));
