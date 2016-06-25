import fieldState from '../fieldState';
import cellNeighbours from './cellNeighbours';
import {times, isNil, each, isEqual} from 'lodash';

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

  const neighbouringMines = (neighbours) => {
    const results = [];
    each(neighbours, (neighbour) => {
      each(mines, (mine) => {
        if (isEqual(neighbour, mine)) results.push(mine);
      });
    });
    return results;
  };

  const cellState = (row, column) => state[row][column];
  const reveal = (row, column) => {
    const neighbours = cellNeighbours(row_count, column_count, row, column);
    state[row][column] = neighbouringMines(neighbours).length.toString();
  };

  return {
    minesPlaced: () => !isNil(mines),
    placeMines: (m) => { mines = m; },
    cellState: cellState,
    reveal: reveal
  };
};
