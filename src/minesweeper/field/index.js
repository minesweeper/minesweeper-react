import fieldState from '../fieldState';
import {times, isNil} from 'lodash';

export default (row_count, column_count) => {
  const state = [];
  let mines = null;

  times(row_count, (row_index) => {
    const row = [];
    state.push(row);
    times(column_count, (column_index) => {
      row.push(fieldState.UNKNOWN);
    });
  });

  const cellState = (row, column) => state[row][column];
  const reveal = (row, column) => {};

  return {
    hasMines: () => !isNil(mines),
    placeMines: (m) => { mines = m; },
    cellState: cellState,
    reveal: reveal
  };
};
