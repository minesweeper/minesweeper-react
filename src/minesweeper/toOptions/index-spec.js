import toOptions from '.';

describe('toOptions', () => {
  it('should split string into options', () => {
    const options = toOptions(`
      . . . .
      . * * .
      . . . .
    `);
    assert.equal(3, options.row_count);
    assert.equal(4, options.column_count);
    assert.deepEqual([[1, 1], [1, 2]], options.mines);
  });
});
