import cellNeighbours from '.';

describe('cellNeighbours', () => {
  const dimensions = [3, 3];

  it('should find all neighbours for middle cell', () => {
    const cell = [1, 1];
    assert.deepEqual(
      cellNeighbours(dimensions, cell),
      [
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 2],
        [2, 0], [2, 1], [2, 2]
      ]
    );
  });

  it('should find all neighbours for top left cell', () => {
    const cell = [0, 0];
    assert.deepEqual(
      cellNeighbours(dimensions, cell),
      [
                [0, 1],
        [1, 0], [1, 1]
      ]
    );
  });

  it('should find all neighbours for bottom right cell', () => {
    const cell = [2, 2];
    assert.deepEqual(
      cellNeighbours(dimensions, cell),
      [
        [1, 1], [1, 2],
        [2, 1]
      ]
    );
  });
});
