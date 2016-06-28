import React from 'react';
import Title from './Title';
import Outer from './Outer';
import styles from './styles.css';

class Game extends React.Component {
  getChildContext() {
    return { game: this.props.game };
  }

  render() {
    return (
      <div className={styles.minesweeper}>
        <Title />
        <Outer />
      </div>
    );
  }
}

Game.childContextTypes = {
  game: React.PropTypes.object
};

export default Game;
