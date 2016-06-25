import {each, isEqual} from 'lodash';

const offsets = [-1, 0, 1];

const withinBound = (val, max) => val >= 0 && val < max;

const withinBounds = (configuration, row, column) => (
  withinBound(row, configuration.row_count) && withinBound(column, configuration.column_count)
);

export default (configuration, row, column) => {
  const cells = [];

  each(offsets, (row_offset) => {
    const row_index = row + row_offset;
    each(offsets, (column_offset) => {
      const column_index = column + column_offset;
      if (!isEqual([row, column], [row_index, column_index]) && withinBounds(configuration, row_index, column_index)) {
        cells.push([row_index, column_index]);
      }
    });
  });

  return cells;
};
