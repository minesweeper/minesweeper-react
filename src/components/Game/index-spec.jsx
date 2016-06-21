import React from 'react';
import Title from './Title';
import Outer from './Outer';
import styles from './styles.css';
import Game from './index.jsx';

describe('Game', () => {
  it('should render', () => {
    styles.minesweeper = 'minesweeper-style';
    const tree = sd.shallowRender(
      <Game />
    );
    const vdom = tree.getRenderOutput();

    expect(vdom).toEqualJSX(
      <div className="minesweeper-style">
        <Title />
        <Outer />
      </div>
    );
  });
});
