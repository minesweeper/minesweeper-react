import {isNil} from 'lodash';

const default_row_count = 16;
const default_column_count = 30;
const default_mine_count = 99;

const validate_row_count = (row_count) => {
  const minimum_row_count = 1;
  if (row_count < minimum_row_count) throw new Error(`must have at least ${minimum_row_count} row`);
};

const validate_column_count = (column_count) => {
  const minimum_column_count = 1;
  if (column_count < minimum_column_count) throw new Error(`must have at least ${minimum_column_count} column`);
};

const validate_mine_count = (row_count, column_count, mine_count) => {
  const cells_available_for_mines = row_count * column_count;
  if (mine_count >= cells_available_for_mines) throw new Error(`must place fewer mines than the number of available cells`);
};

const configuration = (options) => {
  const configuration = options || {};
  const row_count = isNil(configuration.row_count) ? default_row_count : configuration.row_count;
  const column_count = isNil(configuration.column_count) ? default_column_count : configuration.column_count;
  const mine_count = isNil(configuration.mine_count) ? default_mine_count : configuration.mine_count;

  validate_row_count(row_count);
  validate_column_count(column_count);
  validate_mine_count(row_count, column_count, mine_count);

  return {
    row_count: row_count,
    column_count: column_count,
    mine_count: mine_count
  };
};

export default configuration;
