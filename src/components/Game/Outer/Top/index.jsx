import React from 'react';
import Lcd from './Lcd';
import Status from './Status';
import styles from './styles.css';

const Top = () => (
  <div className={styles.top}>
    <Lcd number={99} className={styles.minesRemaining} />
    <Status className={styles.status} />
    <Lcd number={0} className={styles.timer} />
  </div>
);

export default Top;
