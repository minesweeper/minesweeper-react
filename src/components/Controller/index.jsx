import React from 'react';
import styles from './styles.css';
import Lcd from '../Lcd';
import {gameStates} from 'mines';

class Controller extends React.Component {
  constructor(props) {
    super(props);
    const game = global.minesweeperGames[props.name];
    if (game) {
      game.onGameStateChange((newState) => {
        if (game.state() === gameStates.WON) {
          this.setState({won: this.state.won + 1});
        }
        if (game.state() === gameStates.LOST) {
          this.setState({lost: this.state.lost + 1});
        }
      });
    }
    this.state = {
      won: 0,
      lost: 0
    };
  }

  render() {
    const state = this.state;
    return (
      <div className={styles.outer}>
        <div className={styles.middle}>
          <div className={styles.inner}>
            <button className={`${styles.status} ${styles.play}`} />
            <span className={`${styles.status} ${styles.won}`} />
            <Lcd number={state.won} />
            <span className={`${styles.status} ${styles.dead}`} />
            <Lcd number={state.lost} />
            <button className={`${styles.status} ${styles.minus}`} />
            <Lcd number='5' numberdigits='1' />
            <button className={`${styles.status} ${styles.plus}`} />
          </div>
        </div>
      </div>
    );
  }
}

export default Controller;
