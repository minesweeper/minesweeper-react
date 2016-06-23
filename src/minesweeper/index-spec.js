import minesweeper from './index.js';

describe('minesweeper', () => {
  describe('with defaults', () => {
    it('should have initial state for default game', () => {
      const game = minesweeper();
      assert.equal(false, game.finished());
      assert.equal('not started', game.state());
    });
  });

  describe('with specified configuration', () => {
    const options = {
      row_count: 1,
      column_count: 2,
      mine_count: 1
    };

    it('should have initial state for configured game', () => {
      const game = minesweeper(options);
      assert.equal(false, game.finished());
      assert.equal('not started', game.state());
    });

    it('should have initial state for configured game', () => {
      const game = minesweeper(options);
      game.reveal(0, 0);
      assert.equal(true, game.finished());
      assert.equal('won', game.state());
    });
  });
});
