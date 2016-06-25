import configuration from '.';

describe('configuration', () => {
  it('should default to expert profile', () => {
    const config = configuration();
    assert.deepEqual(config.dimensions, [16, 30]);
    assert.equal(config.mine_count, 99);
    assert(!config.test_mode);
  });

  it('should have initial state for test game (where mines are placed)', () => {
    const dimensions = [1, 2];
    const mines = [[0, 0]];
    const config = configuration({
      dimensions: dimensions,
      mines: mines
    });
    assert.deepEqual(dimensions, config.dimensions);
    assert.equal(mines.length, config.mine_count);
    assert(config.test_mode);
  });

  it('should have initial state for configured game', () => {
    const dimensions = [1, 2];
    const mine_count = 1;
    const config = configuration({
      dimensions: dimensions,
      mine_count: mine_count
    });
    assert.deepEqual(dimensions, config.dimensions);
    assert.equal(mine_count, config.mine_count);
    assert(!config.test_mode);
  });

  it('should throw error for less than 1 row', () => {
    const dimensions = [0, 1];
    assert.throws(
      () => configuration({dimensions: dimensions}),
      Error,
      'must have at least 1 row'
    );
  });

  it('should throw error for less than 1 column', () => {
    const dimensions = [0, 0];
    assert.throws(
      () => configuration({dimensions: dimensions}),
      Error,
      'must have at least 1 column'
    );
  });

  it('should throw error when attempting to place 0 mines', () => {
    const dimensions = [2, 2];
    const mine_count = 0;
    assert.throws(
      () => configuration({dimensions: dimensions, mine_count: mine_count}),
      Error,
      'must place fewer mines than the number of available cells'
    );
  });

  it('should throw error attempting to place a mine into each available cell', () => {
    const dimensions = [2, 2];
    const mine_count = 4;
    assert.throws(
      () => configuration({dimensions: dimensions, mine_count: mine_count}),
      Error,
      'must place fewer mines than the number of available cells'
    );
  });

  it('should throw error attempting to place more mines than the number of available cells', () => {
    const dimensions = [2, 2];
    const mine_count = 5;
    assert.throws(
      () => configuration({dimensions: dimensions, mine_count: mine_count}),
      Error,
      'must place fewer mines than the number of available cells'
    );
  });
});
