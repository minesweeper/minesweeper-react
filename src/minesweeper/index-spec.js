import minesweeper from '.';
import gameState from './gameState';
import fieldState from './fieldState';
import toOptions from './toOptions';

describe('minesweeper', () => {
  describe('with defaults', () => {
    it('should have initial state for default game', () => {
      const game = minesweeper();
      assert.equal(false, game.finished());
      assert.equal(gameState.NOT_STARTED, game.state());
    });
  });

  describe('with 1 x 2 and 1 mine', () => {
    let game = null;
    const options = { row_count: 1, column_count: 2, mine_count: 1};

    before(() => { game = minesweeper(options); });

    it('should have initial state for configured game', () => {
      assert.equal(false, game.finished());
      assert.equal(gameState.NOT_STARTED, game.state());
      assert.equal(false, game.test_mode);
    });

    it('should reveal single adjacent mine', () => {
      assert.equal(fieldState.UNKNOWN, game.cellState(0, 0));
      game.reveal(0, 0);
      assert.equal(fieldState.ONE, game.cellState(0, 0));
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
      assert.equal(true, game.test_mode);
    });
  });
});
