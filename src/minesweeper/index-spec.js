import minesweeper from '.';
import gameState from './gameState';
import fieldState from './fieldState';
import toOptions from './toOptions';

describe('minesweeper', () => {
  let game = null;

  describe('with defaults', () => {
    it('should have initial state for default game', () => {
      game = minesweeper();
      expect(game.finished()).toBeFalsy();
      expect(game.state()).toBe(gameState.NOT_STARTED);
    });
  });

  describe('with 1 x 2 and 1 mine', () => {
    const options = {dimensions: [1, 2], mine_count: 1};

    beforeEach(() => { game = minesweeper(options); });

    it('should have initial state for configured game', () => {
      expect(game.finished()).toBeFalsy();
      expect(game.state()).toBe(gameState.NOT_STARTED);
      expect(game.test_mode).toBeFalsy();
    });

    it('should reveal the neighbour to the one mine and immediately win the game', () => {
      const cell = [0, 0];
      expect(game.cellState(cell)).toBe(fieldState.UNKNOWN);
      expect(game.reveal(cell)).toBe(gameState.WON);
      expect(game.state()).toBe(gameState.WON);
      expect(game.cellState(cell)).toBe('1');
      expect(game.finished()).toBeTruthy();
    });
  });

  describe('in test mode (with fixed mines)', () => {
    const options = toOptions(`
      . . . .
      . * * .
      . . . .
    `);

    beforeEach(() => { game = minesweeper(options); });

    it('should have initial state', () => {
      expect(game.finished()).toBeFalsy();
      expect(game.state()).toBe(gameState.NOT_STARTED);
      expect(game.test_mode).toBeTruthy();
    });

    it('should reveal a mine and immediately lose the game', () => {
      const cell = [1, 1];
      expect(game.cellState(cell)).toBe(fieldState.UNKNOWN);
      expect(game.reveal(cell)).toBe(gameState.LOST);
      expect(game.state()).toBe(gameState.LOST);
      expect(game.cellState(cell)).toBe(fieldState.MINE);
      expect(game.finished()).toBeTruthy();
    });

    it('should reveal two adjacent mines', () => {
      const cell = [0, 1];
      expect(game.cellState(cell)).toBe(fieldState.UNKNOWN);
      expect(game.reveal(cell)).toBe(gameState.STARTED);
      expect(game.state()).toBe(gameState.STARTED);
      expect(game.cellState(cell)).toBe('2');
      expect(game.finished()).toBeFalsy();
    });
  });
});
