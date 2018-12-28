import React from 'react';
import s from './App.module.css';
import ledManager from '../../ledManager';

import Box from '../../components/Box';
import Matrix from '../../components/Matrix';
import Ball from '../../components/Ball';

class App extends React.Component {
  componentDidMount() {
    // let x = 0;
    // let y = 1;
    // setInterval(() => {
    //   ledManager.fillLed({ x, y }, 'black');
    //   x += 1;
    //   if (x === 32) {
    //     x = 0;
    //     y += 1;
    //   }
    // }, 30);
    ledManager.drawPosition(2, false);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Box>
            <Matrix>
              <Ball />
            </Matrix>
          </Box>
        </div>
      </div>
    );
  }
}

export default App;
