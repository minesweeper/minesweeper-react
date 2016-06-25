import configuration from './configuration';
import field from './field';
import gameState from './gameState';
import randomlyPlaceMines from './randomlyPlaceMines';

const minesweeper = (options) => {
  const config = configuration(options);
  const state = gameState.NOT_STARTED;
  const visibleField = field(config.row_count, config.column_count);

  const finished = () => (state === gameState.WON || state === gameState.LOST);
  const reveal = (row, column) => {
    if (!visibleField.minesPlaced()) {
      visibleField.placeMines(config.mines || randomlyPlaceMines(config, row, column));
    }
    visibleField.reveal(row, column);
  };
  const cellState = (row, column) => visibleField.cellState(row, column);

  return Object.assign(config, {
    finished: finished,
    state: () => state,
    cellState: cellState,
    reveal: reveal,
    renderAsString: visibleField.renderAsString
  });
};

global.minesweeper = minesweeper;

export default minesweeper;
