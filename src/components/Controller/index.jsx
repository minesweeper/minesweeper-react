import React from 'react';
import styles from './styles.css';

class Controller extends React.Component {
  render() {
    return (
      <div className={styles.outer}>
        <div className={styles.middle}>
          <div className={styles.inner}>
            <div className="playPause" />
            <div className="gamesWon" />
            <div className="gamesLost" />
            <div className="speed" />
            CONTROLLING {this.props.name}
          </div>
        </div>
      </div>
    );
  }
}

export default Controller;
