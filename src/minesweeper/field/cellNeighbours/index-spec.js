import cellNeighbours from '.';

describe('cellNeighbours', () => {
  it('should find all neighbours for middle cell', () => {
    const row = 1;
    const column = 1;
    const configuration = {row_count: 3, column_count: 3};
    assert.deepEqual(
      cellNeighbours(configuration, row, column),
      [
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 2],
        [2, 0], [2, 1], [2, 2]
      ]
    );
  });

  it('should find all neighbours for top left cell', () => {
    const row = 0;
    const column = 0;
    const configuration = {row_count: 3, column_count: 3};
    assert.deepEqual(
      cellNeighbours(configuration, row, column),
      [
                [0, 1],
        [1, 0], [1, 1]
      ]
    );
  });

  it('should find all neighbours for bottom right cell', () => {
    const row = 2;
    const column = 2;
    const configuration = {row_count: 3, column_count: 3};
    assert.deepEqual(
      cellNeighbours(configuration, row, column),
      [
        [1, 1], [1, 2],
        [2, 1]
      ]
    );
  });
});
