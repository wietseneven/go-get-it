import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './containers/App/App';

import ledManager from './stores/ledManager';
import leds from './stores/leds';
import movement from './stores/movement';

const stores = {
  led: ledManager,
  leds,
  movement,
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
