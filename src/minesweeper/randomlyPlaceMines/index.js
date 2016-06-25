import {times, shuffle, take, isEqual} from 'lodash';

export default (configuration, row, column) => {
  const cells = [];

  times(configuration.row_count, (row_index) => {
    times(configuration.column_count, (column_index) => {
      if (!isEqual([row, column], [row_index, column_index])) {
        cells.push([row_index, column_index]);
      }
    });
  });

  return take(shuffle(cells), configuration.mine_count);
};
