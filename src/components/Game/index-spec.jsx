import React from 'react';
import Title from './Title';
import Outer from './Outer';
import styles from './styles.css';
import Game from '.';

describe('Game', () => {
  it('should render', () => {
    styles.minesweeper = 'minesweeper-style';
    const tree = sd.shallowRender(
      <Game />
    );
    const vdom = tree.getRenderOutput();
    const instance = tree.getMountedInstance();

    expect(vdom).toEqualJSX(
      <div className="minesweeper-style">
        <Title />
        <Outer />
      </div>
    );
  });
});
