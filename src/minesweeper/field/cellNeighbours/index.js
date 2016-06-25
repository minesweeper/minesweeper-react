import {each, isEqual} from 'lodash';

const offsets = [-1, 0, 1];

const withinBound = (val, max) => val >= 0 && val < max;

const withinBounds = (row_count, column_count, row, column) => (
  withinBound(row, row_count) && withinBound(column, column_count)
);

export default ([row_count, column_count], [row, column]) => {
  const cells = [];

  each(offsets, (row_offset) => {
    const row_index = row + row_offset;
    each(offsets, (column_offset) => {
      const column_index = column + column_offset;
      const this_cell = isEqual([row, column], [row_index, column_index]);
      if (!this_cell && withinBounds(row_count, column_count, row_index, column_index)) {
        cells.push([row_index, column_index]);
      }
    });
  });

  return cells;
};
