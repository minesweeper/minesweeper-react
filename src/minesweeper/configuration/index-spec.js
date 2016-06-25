import configuration from '.';

// beginner:     rows: 9,  cols: 9,  mineCount: 10
// intermediate: rows: 16, cols: 16, mineCount: 40
// expert:       rows: 16, cols: 30, mineCount: 99

const default_row_count = 16;
const default_column_count = 30;
const default_mine_count = 99;

describe('minesweeper', () => {
  it('should have initial state for default game', () => {
    const config = configuration();
    assert.equal(default_row_count, config.row_count);
    assert.equal(default_column_count, config.column_count);
    assert.equal(default_mine_count, config.mine_count);
    assert.equal(false, config.test_mode);
  });

  it('should have initial state for test game (where mines are placed)', () => {
    const row_count = 1;
    const column_count = 2;
    const mines = [[0, 0]];
    const config = configuration({
      row_count: row_count,
      column_count: column_count,
      mines: mines
    });
    assert.equal(row_count, config.row_count);
    assert.equal(column_count, config.column_count);
    assert.equal(mines.length, config.mine_count);
    assert.equal(true, config.test_mode);
  });

  it('should have initial state for configured game', () => {
    const row_count = 1;
    const column_count = 2;
    const mine_count = 1;
    const config = configuration({
      row_count: row_count,
      column_count: column_count,
      mine_count: mine_count
    });
    assert.equal(row_count, config.row_count);
    assert.equal(column_count, config.column_count);
    assert.equal(mine_count, config.mine_count);
    assert.equal(false, config.test_mode);
  });

  it('should throw error for less than 1 row', () => {
    const invalid_row_count = 0;
    assert.throws(
      () => configuration({row_count: invalid_row_count}),
      Error,
      'must have at least 1 row'
    );
  });

  it('should throw error for less than 1 column', () => {
    const invalid_column_count = 0;
    assert.throws(
      () => configuration({column_count: invalid_column_count}),
      Error,
      'must have at least 1 column'
    );
  });

  it('should throw error attempting to place a mine into each available cell', () => {
    const row_count = 2;
    const column_count = 2;
    const mine_count = 4;
    assert.throws(
      () => configuration({row_count: row_count, column_count: column_count, mine_count: mine_count}),
      Error,
      'must place fewer mines than the number of available cells'
    );
  });

  it('should throw error attempting to plaec more mines than the number of available cells', () => {
    const row_count = 2;
    const column_count = 2;
    const mine_count = 5;
    assert.throws(
      () => configuration({row_count: row_count, column_count: column_count, mine_count: mine_count}),
      Error,
      'must place fewer mines than the number of available cells'
    );
  });
});
