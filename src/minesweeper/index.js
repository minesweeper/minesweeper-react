import configuration from './configuration';
import field from './field';
import gameState from './gameState';
import randomlyPlaceMines from './randomlyPlaceMines';
import {assign} from 'lodash';

const minesweeper = (options) => {
  const config = configuration(options);
  let state = gameState.NOT_STARTED;
  const visibleField = field(config.dimensions);

  const finished = () => (state === gameState.WON || state === gameState.LOST);

  const ensureMinesHaveBeenPlaced = ([row, column]) => {
    if (!visibleField.minesPlaced()) {
      visibleField.placeMines(config.mines || randomlyPlaceMines(config, row, column));
    }
  };

  const reveal = (cell) => {
    if (finished()) return state;
    ensureMinesHaveBeenPlaced(cell);
    if (visibleField.reveal(cell)) {
      state = gameState.LOST;
    } else {
      state = visibleField.allCellsWithoutMinesRevealed() ? gameState.WON : gameState.STARTED;
    }
    return state;
  };

  return assign(config, {
    finished: finished,
    state: () => state,
    cellState: visibleField.cellState,
    reveal: reveal,
    renderAsString: visibleField.renderAsString
  });
};

global.minesweeper = minesweeper;

export default minesweeper;
