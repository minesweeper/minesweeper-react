import React from 'react';
import Status from './';
import {gameStates} from 'mines';
import styles from './styles.css';

describe('Status', () => {
  let onGameChange = null;
  let tree = null;
  let instance = null;
  const game = {
    onGameStateChange: (onGameStateChangeCb) => { onGameChange = onGameStateChangeCb; },
    state: () => gameStates.NOT_STARTED
  };

  beforeEach('set up component', () => {
    styles.status = 'status';
    styles.alive = 'alive';
    styles.alivePressed = 'alivePressed';
    styles.won = 'won';
    styles.dead = 'dead';
    tree = sd.shallowRender(<Status game={game} />);
    instance = tree.getMountedInstance();
  });

  it('should render a child span element with a default status of alive', () => {

    expect(tree.getRenderOutput()).toEqualJSX(
      <span className='status alive' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onTouchStart={instance.onMouseDown} onTouchEnd={instance.onMouseUp}>
      </span>
    );
  });

  it('should render a child span element when the game has been won', () => {
    onGameChange(gameStates.WON);
    tree.reRender(<Status game={game} />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <span className='status won' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onTouchStart={instance.onMouseDown} onTouchEnd={instance.onMouseUp}>
      </span>
    );
  });

  it('should render a child span element when the game has been lost', () => {
    onGameChange(gameStates.LOST);
    tree.reRender(<Status game={game} />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <span className='status dead' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onTouchStart={instance.onMouseDown} onTouchEnd={instance.onMouseUp}>
      </span>
    );
  });

  it('should render a child span element when the button is pressed', () => {
    instance.onMouseDown({preventDefault: () => {}});
    tree.reRender(<Status game={game} />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <span className='status alivePressed' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onTouchStart={instance.onMouseDown} onTouchEnd={instance.onMouseUp}>
      </span>
    );
  });
});
