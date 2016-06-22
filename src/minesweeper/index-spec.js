import minesweeper from './index.js';

describe('minesweeper', () => {
  it('should have initial state', () => {
    const game = minesweeper();
    assert.equal(false, game.finished());
  });
});
