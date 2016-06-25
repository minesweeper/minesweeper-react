import configuration from './configuration';
import gameState from './gameState';

const minesweeper = (options) => {
  const config = configuration(options);
  let state = gameState.NOT_STARTED;

  const finished = () => (state === gameState.WON || state === gameState.LOST);
  const reveal = (row, column) => {
    state = gameState.STARTED;
  };
  const cellState = (row, column) => {
    return '.';
  };

  return Object.assign(config, {
    finished: finished,
    state: () => state,
    cellState: cellState,
    reveal: reveal
  });
};

export default minesweeper;
