import configuration from './configuration';

const minesweeper = (options) => {
  const finished = () => false;
  return Object.assign(configuration(options), {
    finished: finished
  });
};

export default minesweeper;
