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

    beforeEach(() => { game = minesweeper(options); });

    it('should have initial state for configured game', () => {
      assert.equal(false, game.finished());
      assert.equal(gameState.NOT_STARTED, game.state());
      assert.equal(false, game.test_mode);
    });

    it('should reveal the neighbour to the one mine and immediately win the game', () => {
      assert.equal(fieldState.UNKNOWN, game.cellState(0, 0));
      game.reveal(0, 0);
      assert.equal('1', game.cellState(0, 0));
      assert.equal(gameState.WON, game.state());
      assert.equal(true, game.finished());
    });
  });

  describe('in test mode (with fixed mines)', () => {
    let game = null;
    const options = toOptions(`
      . . . .
      . * * .
      . . . .
    `);

    beforeEach(() => { game = minesweeper(options); });

    it('should have initial state', () => {
      assert.equal(false, game.finished());
      assert.equal(gameState.NOT_STARTED, game.state());
      assert.equal(true, game.test_mode);
    });

    it('should reveal a mine and immediately lose the game', () => {
      const row = 1;
      const column = 1;
      assert.equal(fieldState.UNKNOWN, game.cellState(row, column));
      game.reveal(row, column);
      assert.equal(fieldState.MINE, game.cellState(row, column));
      assert.equal(gameState.LOST, game.state());
      assert.equal(true, game.finished());
    });

    it('should reveal two adjacent mines', () => {
      assert.equal(fieldState.UNKNOWN, game.cellState(0, 1));
      game.reveal(0, 1);
      assert.equal('2', game.cellState(0, 1));
    });
  });
});
