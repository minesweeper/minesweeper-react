import field from '.';
import fieldState from '../fieldState';
import {times} from 'lodash';

describe('field', () => {
  const dimensions = [1, 3];
  let testField = null;

  beforeEach(() => { testField = field(dimensions); });

  it('should be initialised with all cells having UNKNOWN cell state and no mines', () => {
    const [row_count, column_count] = dimensions;
    times(row_count, (row) => {
      times(column_count, (column) => {
        assert.equal(fieldState.UNKNOWN, testField.cellState([row, column]));
      });
    });
    assert.equal(false, testField.minesPlaced());
  });

  describe('with a mine placed', () => {
    const mine_cell = [0, 0];
    beforeEach(() => { testField.placeMines([mine_cell]); });

    it('should have mines after mines are assigned', () => {
      assert.equal(true, testField.minesPlaced());
      assert(testField.reveal(mine_cell));
    });

    it('should have allCellsWithoutMinesRevealed when all non mine cells have been revealed', () => {
      let cell = null;
      assert.equal(false, testField.allCellsWithoutMinesRevealed());

      cell = [0, 1];
      assert(!testField.reveal(cell));
      assert.equal(testField.cellState(cell), '1');
      assert.equal(false, testField.allCellsWithoutMinesRevealed());

      cell = [0, 2];
      assert(!testField.reveal(cell));
      assert.equal(testField.cellState(cell), '0');
      assert(testField.allCellsWithoutMinesRevealed());
    });
  });
});
