import React from 'react';
import Lcd from './Lcd';
import Status from './Status';
import styles from './styles.css';
import statusStyles from './Status/styles.css';
import styleForStatus from './Status/styleForStatus';

class Top extends React.Component {
  constructor(props, context) {
    super(props, context);
    const game = context.game;
    context.game.onRemainingMineCountChange(
      (count) => { this.setState({mineCount: count}); }
    );
    context.game.onTimerChange(
      (ms) => { this.setState({seconds: Math.floor(ms / 1000)}); }
    );
    context.game.onGameStateChange((newState) => {
      this.setState({gameState: newState});
    });

    this.state = {
      mineCount: game.remainingMineCount(),
      seconds: 0,
      gameState: game.state()
    };
  }

  render() {
    const state = this.state;
    const gameStateStyle = statusStyles[styleForStatus(state.gameState)];

    return (
      <div className={styles.top}>
        <Lcd number={state.mineCount} className={styles.minesRemaining} />
        <Status className={`${styles.status} ${gameStateStyle}`} />
        <Lcd number={state.seconds} className={styles.timer} />
      </div>
    );
  }
}

Top.contextTypes = {
  game: React.PropTypes.object
};

export default Top;
