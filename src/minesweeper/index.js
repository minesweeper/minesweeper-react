import configuration from './configuration';
import field from './field';
import gameState from './gameState';
import randomlyPlaceMines from './randomlyPlaceMines';

const minesweeper = (options) => {
  const config = configuration(options);
  let state = gameState.NOT_STARTED;
  const visibleField = field([config.row_count, config.column_count]);

  const finished = () => (state === gameState.WON || state === gameState.LOST);

  const reveal = (cell) => {
    const [row, column] = cell;
    if (!visibleField.minesPlaced()) {
      visibleField.placeMines(config.mines || randomlyPlaceMines(config, row, column));
    }
    if (visibleField.reveal(cell)) {
      state = gameState.LOST;
    } else {
      state = visibleField.allCellsWithoutMinesRevealed() ? gameState.WON : gameState.STARTED;
    }
  };

  return Object.assign(config, {
    finished: finished,
    state: () => state,
    cellState: visibleField.cellState,
    reveal: reveal,
    renderAsString: visibleField.renderAsString
  });
};

global.minesweeper = minesweeper;

export default minesweeper;
