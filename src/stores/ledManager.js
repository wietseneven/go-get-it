/* eslint-disable eqeqeq */
import { action, decorate, observable } from 'mobx';
import leds from './leds';

const LEDS_IN_ROW = 32;

function CHSV(h, s, b) {
  return `hsl(${h}, ${s}, ${b})`;
}

class LedManager {
  fillLed = (pos, color = 'yellow') => {
    leds[pos] = color;
  };

  calculateXY = (x, y) => x + y * LEDS_IN_ROW;

  drawPosition = (sensor, clear) => {
    let row = 0;
    let rowHeight = 6;
    let position = sensor;
    if (sensor >= 16) {
      row = 4;
      rowHeight = 7;
      position = sensor - 16;
    } else if (sensor >= 12) {
      row = 3;
      position = sensor - 12;
    } else if (sensor >= 8) {
      row = 2;
      position = sensor - 8;
    } else if (sensor >= 4) {
      row = 1;
      position = sensor - 4;
    }

    const y1 = row * 6;
    const y2 = y1 + rowHeight;
    const x1 = position * 8;
    // if (position > 0) x1 = x1 - 1;
    const x2 = x1 + 7;
    this.drawSquare(x1, y1, x2, y2, clear);
  };

  drawSquare = (x1, y1, x2, y2, clear) => {
    let hue = 0;
    for (let x = x1; x < x2 + 1; x += 1) {
      for (let y = y1; y < y2 + 1; y += 1) {
        const position = this.calculateXY(x, y);

        if (clear) {
          this.fillLed(position, 'Black');
        } else {
          this.fillLed(position, CHSV((hue += 1), `100%`, `40%`));
        }
      }
    }
  };
}

decorate(LedManager, {
  fillLed: action,
  leds: observable,
});

export default new LedManager();
