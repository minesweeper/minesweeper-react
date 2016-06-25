import {times, shuffle, take} from 'lodash';

export default (configuration, row, column) => {
  const cells = [];

  times(configuration.row_count, (row_index) => {
    times(configuration.column_count, (column_index) => {
      if (row_index !== row && column_index !== column) {
        cells.push([row_index, column_index]);
      }
    });
  });

  return take(shuffle(cells), configuration.mine_count);
};
