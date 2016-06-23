import configuration from './configuration';

const minesweeper = (options) => {
  let state = 'not started';

  const finished = () => (state === 'won' || state === 'lost');
  const reveal = (row, column) => {
    state = 'won';
  };

  return Object.assign(configuration(options), {
    finished: finished,
    state: () => state,
    reveal: reveal
  });
};

export default minesweeper;
