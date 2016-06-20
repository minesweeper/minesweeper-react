import React from 'react';
import Title from './Title';
import Outer from './Outer';
import styles from './styles.css';

const Game = () => (
  <div className={styles.minesweeper}>
    <Title />
    <Outer />
  </div>
);

export default Game;
