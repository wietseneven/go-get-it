import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import cN from 'classnames';
import s from './Joystick.module.css';

class Joystick extends Component {
  static propTypes = {
    movement: PropTypes.shape({
      setDirection: PropTypes.func.isRequired,
      clearDirection: PropTypes.func.isRequired,
      movingUp: PropTypes.bool.isRequired,
      movingDown: PropTypes.bool.isRequired,
      movingLeft: PropTypes.bool.isRequired,
      movingRight: PropTypes.bool.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyDown = ({ keyCode }) => {
    const { movement } = this.props;
    switch (keyCode) {
      case 38:
        movement.setDirection('up');
        break;
      case 37:
        movement.setDirection('left');
        break;
      case 39:
        movement.setDirection('right');
        break;
      case 40:
        movement.setDirection('down');
        break;
      default:
        break;
    }
  };

  handleKeyUp = ({ keyCode }) => {
    const { movement } = this.props;
    switch (keyCode) {
      case 38:
        movement.clearDirection('up');
        break;
      case 37:
        movement.clearDirection('left');
        break;
      case 39:
        movement.clearDirection('right');
        break;
      case 40:
        movement.clearDirection('down');
        break;
      default:
        break;
    }
  };

  render() {
    const {
      movement: { movingUp, movingDown, movingLeft, movingRight },
    } = this.props;

    return (
      <div className={s.root}>
        <div className={s.base}>
          <div
            className={cN(s.corner, s.top, s.left, {
              [s.active]:
                (movingUp && !movingRight) || (movingLeft && !movingDown),
            })}
          />
          <div
            className={cN(s.corner, s.top, s.right, {
              [s.active]:
                (movingUp && !movingLeft) || (movingRight && !movingDown),
            })}
          />
          <div
            className={cN(s.corner, s.bottom, s.left, {
              [s.active]:
                (movingLeft && !movingUp) || (movingDown && !movingRight),
            })}
          />
          <div
            className={cN(s.corner, s.bottom, s.right, {
              [s.active]:
                (movingRight && !movingUp) || (movingDown && !movingLeft),
            })}
          />
        </div>

        <div className={s.joystick}>
          <div className={s.inner}>
            <div className={s.roller}>
              <div
                className={cN(
                  s.stick,
                  { [s.up]: movingUp },
                  { [s.down]: movingDown },
                  { [s.left]: movingLeft },
                  { [s.right]: movingRight },
                )}
              >
                <div className={s.inner} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default inject('movement')(observer(Joystick));
