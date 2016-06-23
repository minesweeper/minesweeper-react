import _ from 'lodash';

export default (string) => {
  const lines = string.split("\n");
  let row_count = 0;
  let column_count = 0;
  const mines = [];
  _.forEach(lines, (line) => {
    const trim_line = _.trim(line);
    if (trim_line !== '') {
      const chars = trim_line.split(" ");
      const char_count = chars.length;
      if (char_count > column_count) column_count = char_count;
      _.forEach(chars, (char, column_index) => {
        if (char === '*') {
          mines.push([row_count, column_index]);
        }
      });
      row_count += 1;
    }
  });
  return {
    row_count: row_count,
    column_count: column_count,
    mines: mines
  };
};
