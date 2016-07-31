import React from 'react';
import styles from './styles.css';

const Digit = (props) => {
  const index = `n${props.digit}`;
  const className = `${styles.lcd} ${styles[index]}`;
  return (
    <div className={className}>
    </div>
  );
};

export default Digit;
