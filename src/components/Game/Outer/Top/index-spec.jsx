import React from 'react';
import Top from './';
import Lcd from './Lcd';
import Status from './Status';
import {gameStates} from 'mines';

import styles from './styles.css';
import statusStyles from './Status/styles.css';

describe('Top', () => {
  it('should render', () => {
    const game = {
      onRemainingMineCountChange: () => { },
      onTimerChange: () => { },
      onGameStateChange: () => { },
      remainingMineCount: () => 99,
      state: () => gameStates.NOT_STARTED
    };
    styles.top = 'top';
    styles.minesRemaining = 'minesRemaining';
    styles.status = 'ok';
    styles.timer = 'timer';
    statusStyles.alive = 'alive';

    const tree = sd.shallowRender(<Top />, { game: game });
    expect(tree.getRenderOutput()).toEqualJSX(
      <div className='top'>
        <Lcd number={99} className='minesRemaining' />
        <Status className='ok alive' />
        <Lcd number={0} className='timer' />
      </div>
    );
  });
});
