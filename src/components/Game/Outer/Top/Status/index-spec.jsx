import React from 'react';
import Status from './';
import {gameStates} from 'mines';
import styles from './styles.css';

describe('Status', () => {
  it('should render a child span element with a status', () => {
    let onGameChange = null;
    const game = {
      onGameStateChange: (onGameStateChangeCb) => { onGameChange = onGameStateChangeCb; },
      state: () => gameStates.NOT_STARTED
    };
    styles.status = 'status';
    styles.alive = 'alive';
    styles.alivePressed = 'alivePressed';
    styles.won = 'won';
    styles.dead = 'dead';
    const tree = sd.shallowRender(<Status game={game} />);
    const instance = tree.getMountedInstance();
    expect(tree.getRenderOutput()).toEqualJSX(
      <span className='status alive' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp}>
      </span>
    );

    onGameChange(gameStates.WON);
    tree.reRender(<Status game={game} />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <span className='status won' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp}>
      </span>
    );

    onGameChange(gameStates.LOST);
    tree.reRender(<Status game={game} />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <span className='status dead' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp}>
      </span>
    );

    instance.onMouseDown({preventDefault: () => {}});
    tree.reRender(<Status game={game} />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <span className='status alivePressed' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp}>
      </span>
    );
  });
});
