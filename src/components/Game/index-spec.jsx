import React from 'react';
import Title from './Title';
import Outer from './Outer';
import styles from './styles.css';
import Game from './index.jsx';

describe('Game', () => {
  it('should render with calculated width', () => {
    styles.minesweeper = 'minesweeper-style';
    const game = {dimensions: [10, 10]};
    const tree = sd.shallowRender(
      <Game game={game} />
    );
    const vdom = tree.getRenderOutput();

    expect(vdom).toEqualJSX(
      <div className="minesweeper-style" style={{width: 180}}>
        <Title />
        <Outer />
      </div>
    );
  });
});
