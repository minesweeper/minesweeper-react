import fieldState from './fieldState';
import {times} from 'lodash';

export default (row_count, column_count) => {
  const state = [];

  times(row_count, (row_index) => {
    const row = [];
    state.push(row);
    times(column_count, (column_index) => {
      row.push(fieldState.UNKNOWN);
    });
  });

  const cellState = (row, column) => state[row][column];

  return {
    cellState: cellState
  };
};
