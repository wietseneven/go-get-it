/* eslint-disable eqeqeq */
import { action, decorate, observable } from 'mobx';

class Movement {
  movingUp = false;

  movingDown = false;

  movingLeft = false;

  movingRight = false;

  canMoveUp = true;

  canMoveDown = true;

  canMoveLeft = true;

  canMoveRight = true;

  setDirection = to => {
    switch (to) {
      case 'up':
        this.movingUp = true;
        this.movingDown = false;
        break;
      case 'down':
        this.movingDown = true;
        this.movingUp = false;
        break;
      case 'left':
        this.movingLeft = true;
        this.movingRight = false;
        break;
      case 'right':
        this.movingRight = true;
        this.movingLeft = false;
        break;
      default:
        this.movingUp = false;
        this.movingDown = false;
        this.movingLeft = false;
        this.movingRight = false;
        break;
    }
  };

  clearDirection = to => {
    switch (to) {
      case 'up':
        this.movingUp = false;
        break;
      case 'down':
        this.movingDown = false;
        break;
      case 'left':
        this.movingLeft = false;
        break;
      case 'right':
        this.movingRight = false;
        break;
      default:
        this.movingUp = false;
        this.movingDown = false;
        this.movingLeft = false;
        this.movingRight = false;
        break;
    }
  };
}

decorate(Movement, {
  movingUp: observable,
  movingDown: observable,
  movingLeft: observable,
  movingRight: observable,
  canMoveUp: observable,
  canMoveDown: observable,
  canMoveLeft: observable,
  canMoveRight: observable,
  setDirection: action,
  clearDirection: action,
});

export default new Movement();
