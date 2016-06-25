import fieldState from '../fieldState';
import cellNeighbours from './cellNeighbours';
import renderAsString from './renderAsString';
import {times, isNil, isEqual, filter, some, isNaN} from 'lodash';

export default (row_count, column_count) => {
  const state = [];
  let mines = null;
  const total_cells = row_count * column_count;

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
    const revealedMine = isMine([row, column]);
    if (revealedMine) {
      state[row][column] = fieldState.MINE;
    } else {
      const neighbours = cellNeighbours(row_count, column_count, row, column);
      state[row][column] = neighbouringMines(neighbours).length.toString();
    }
    return revealedMine;
  };

  const isRevealedCell = (row, column) => !isNaN(parseInt(state[row][column]));

  const revealedCells = () => {
    let count = 0;
    times(row_count, (row_index) => {
      times(column_count, (column_index) => {
        if (isRevealedCell(row_index, column_index)) count += 1;
      });
    });
    return count;
  };

  const allCellsWithoutMinesRevealed = () => revealedCells() === (total_cells - mines.length);

  return {
    minesPlaced: () => !isNil(mines),
    placeMines: (m) => { mines = m; },
    cellState: cellState,
    reveal: reveal,
    renderAsString: () => renderAsString(state),
    allCellsWithoutMinesRevealed: allCellsWithoutMinesRevealed
  };
};
