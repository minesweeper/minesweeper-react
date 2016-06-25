import React from 'react';
import styles from './styles.css';
import {times} from 'lodash';

const Bottom = () => {
  const number_of_rows = 16;
  const number_of_cols = 30;

  const rows = times(number_of_rows, (row) => {
    const cols = times(number_of_cols, (col) => {
      return <td key={`${row}.${col}`} className={`${styles.unclicked} ${styles.field}`}></td>;
    });
    return <tr key={row}>{cols}</tr>;
  });
  return (
    <div className={styles.bottom}>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default Bottom;
