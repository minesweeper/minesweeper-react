import {each} from 'lodash';

export default (cells) => {
  const lines = [""];
  each(cells, (row, row_index) => {
    const cell_values = [];
    each(row, (cell_value, column_index) => {
      cell_values.push(cell_value);
    });
    lines.push(cell_values.join(" "));
  });
  lines.push("");
  return lines.join("\n");
};
