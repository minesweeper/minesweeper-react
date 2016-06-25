import fieldState from './fieldState';
import _ from 'lodash';

export default (row_count, column_count) => {
  const state = [];

  _.forEach(_.range(row_count), (row_index) => {
    const row = [];
    state.push(row);
    _.forEach(_.range(column_count), (column_index) => {
      row.push(fieldState.UNKNOWN);
    });
  });

  const cellState = (row, column) => state[row][column];

  return {
    cellState: cellState
  };
};
