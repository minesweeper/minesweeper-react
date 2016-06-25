import fieldState from '../fieldState';
import cellNeighbours from './cellNeighbours';
import renderAsString from './renderAsString';
import {times, isNil, isEqual, filter, some} from 'lodash';

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

  const isMine = (cell) => some(mines, (mine) => isEqual(cell, mine));
  const neighbouringMines = (neighbours) => filter(neighbours, (neighbour) => isMine(neighbour));

  const cellState = (row, column) => state[row][column];
  const reveal = (row, column) => {
    if (isMine([row, column])) {
      state[row][column] = fieldState.MINE;
    } else {
      const neighbours = cellNeighbours(row_count, column_count, row, column);
      state[row][column] = neighbouringMines(neighbours).length.toString();
    }
  };

  return {
    minesPlaced: () => !isNil(mines),
    placeMines: (m) => { mines = m; },
    cellState: cellState,
    reveal: reveal,
    renderAsString: () => renderAsString(state)
  };
};
