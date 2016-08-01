import React from 'react';
import styles from './styles.css';
import Lcd from '../Lcd';
import {gameStates} from 'mines';
import {takeTurn} from 'mines-robot';

class Controller extends React.Component {
  constructor(props) {
    super(props);
    const speedToMillis = [0, 3000, 2000, 1000, 800, 700, 500, 200, 100, 50];
    const game = global.minesweeperGames[props.name];
    const incrementWon = () => { this.setState({won: this.state.won + 1}); };
    const incrementLost = () => { this.setState({lost: this.state.lost + 1}); };
    let playing = false;
    if (game) {
      game.onGameStateChange((newState) => {
        if (newState === gameStates.WON) incrementWon();
        if (newState === gameStates.LOST) incrementLost();
      });
    }
    this.play = () => {
      takeTurn(game);
      const newState = game.state();
      if (newState === gameStates.WON || newState === gameStates.LOST) {
        if (playing) game.reset();
        else return;
      }
      setTimeout(this.play, speedToMillis[this.state.speed]);
    };
    this.increaseSpeed = () => {
      if (this.state.speed < 9) this.setState({speed: this.state.speed + 1});
    };
    this.decreaseSpeed = () => {
      if (this.state.speed > 1) this.setState({speed: this.state.speed - 1});
    };
    this.togglePlayPause = () => {
      const playingOrPaused = this.state.playingOrPaused;
      if (playingOrPaused === 'play') {
        playing = false;
        this.setState({playingOrPaused: 'pause'});
      }
      if (playingOrPaused === 'pause') {
        playing = true;
        this.play();
        this.setState({playingOrPaused: 'play'});
      }
    };
    this.state = {
      won: 0,
      lost: 0,
      playingOrPaused: 'pause',
      speed: 5
    };
  }

  render() {
    const states = { play: 'pause', pause: 'play' };
    const state = this.state;
    const nextState = states[state.playingOrPaused];

    return (
      <div className={styles.outer}>
        <div className={styles.middle}>
          <div className={styles.inner}>
            <button onClick={this.togglePlayPause} className={`${styles.status} ${styles[nextState]}`} />
            <span className={`${styles.status} ${styles.won}`} />
            <Lcd number={state.won} />
            <span className={`${styles.status} ${styles.dead}`} />
            <Lcd number={state.lost} />
            <button onClick={this.decreaseSpeed} className={`${styles.status} ${styles.minus}`} />
            <Lcd number={state.speed} numberdigits='1' />
            <button onClick={this.increaseSpeed} className={`${styles.status} ${styles.plus}`} />
          </div>
        </div>
      </div>
    );
  }
}

export default Controller;
