import minesweeper from '.';
import gameState from './gameState';
import toOptions from './toOptions';

describe('minesweeper', () => {
  describe('with defaults', () => {
    it('should have initial state for default game', () => {
      const game = minesweeper();
      assert.equal(false, game.finished());
      assert.equal(gameState.NOT_STARTED, game.state());
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
      assert.equal(gameState.NOT_STARTED, game.state());
    });
  });

  describe('in test mode (with fixed mines)', () => {
    const options = toOptions(`
      . . . .
      . * * .
      . . . .
    `);

    it('should have initial state', () => {
      const game = minesweeper(options);
      assert.equal(false, game.finished());
      assert.equal(gameState.NOT_STARTED, game.state());
    });
  });
});
