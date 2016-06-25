import cellNeighbours from '.';

describe('cellNeighbours', () => {
  const row_count = 3;
  const column_count = 3;

  it('should find all neighbours for middle cell', () => {
    const row = 1;
    const column = 1;
    assert.deepEqual(
      cellNeighbours(row_count, column_count, row, column),
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
    assert.deepEqual(
      cellNeighbours(row_count, column_count, row, column),
      [
                [0, 1],
        [1, 0], [1, 1]
      ]
    );
  });

  it('should find all neighbours for bottom right cell', () => {
    const row = 2;
    const column = 2;
    assert.deepEqual(
      cellNeighbours(row_count, column_count, row, column),
      [
        [1, 1], [1, 2],
        [2, 1]
      ]
    );
  });
});
