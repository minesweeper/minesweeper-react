import React from 'react';
import Lcd from './Lcd';
import Status from './Status';
import styles from './styles.css';

class Top extends React.Component {
  constructor(props, context) {
    super(props, context);
    const game = context.game;
    context.game.onRemainingMineCountChange(
      (count) => { this.setState({mineCount: count}); }
    );
    context.game.onTimerChange(
      (ms) => { this.setState({seconds: Math.floor(ms/1000)}); }
    );

    this.state = {
      mineCount: game.remainingMineCount(),
      seconds: 0
    };
  }

  render() {
    const state = this.state;
    return (
      <div className={styles.top}>
        <Lcd number={state.mineCount} event='RemainingMineCount' className={styles.minesRemaining} />
        <Status className={styles.status} />
        <Lcd number={state.seconds} event='Timer' className={styles.timer} />
      </div>
    );
  }
}

Top.contextTypes = {
  game: React.PropTypes.object
};

export default Top;
