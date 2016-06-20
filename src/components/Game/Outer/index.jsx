import React from 'react';
import Top from './Top';
import Bottom from './Bottom';
import styles from './styles.css';

const Outer = () => (
  <div className={styles.outer}>
    <Top />
    <Bottom />
  </div>
);

export default Outer;
