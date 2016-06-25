import toOptions from '.';

describe('toOptions', () => {
  it('should split string into options', () => {
    const options = toOptions(`
      . . . .
      . * * .
      . . . .
    `);
    assert.deepEqual(options.dimensions, [3, 4]);
    assert.deepEqual(options.mines, [[1, 1], [1, 2]]);
  });
});
