import field from '.';
import fieldState from '../fieldState';
import {times} from 'lodash';

describe('field', () => {
  const row_count = 1;
  const column_count = 3;
  let testField = null;

  beforeEach(() => { testField = field(row_count, column_count); });

  it('should be initialised with all cells having UNKNOWN cell state and no mines', () => {
    times(row_count, (row_index) => {
      times(column_count, (column_index) => {
        assert.equal(fieldState.UNKNOWN, testField.cellState(row_index, column_index));
      });
    });
    assert.equal(false, testField.minesPlaced());
  });

  describe('with a mine placed', () => {
    beforeEach(() => { testField.placeMines([[0, 0]]); });

    it('should have mines after mines are assigned', () => {
      assert.equal(true, testField.minesPlaced());
      assert(testField.reveal(0, 0));
    });

    it('should have allCellsWithoutMinesRevealed when all non mine cells have been revealed', () => {
      assert.equal(false, testField.allCellsWithoutMinesRevealed());

      assert(!testField.reveal(0, 1));
      assert.equal(testField.cellState(0, 1), '1');
      assert.equal(false, testField.allCellsWithoutMinesRevealed());

      assert(!testField.reveal(0, 2));
      assert.equal(testField.cellState(0, 2), '0');
      assert(testField.allCellsWithoutMinesRevealed());
    });
  });
});
