import field from '.';
import fieldState from '../fieldState';
import {times} from 'lodash';

describe('field', () => {
  const row_count = 1;
  const column_count = 3;

  it('should be initialised with all cells having UNKNOWN cell state and no mines', () => {
    const f = field(row_count, column_count);
    times(row_count, (row_index) => {
      times(column_count, (column_index) => {
        assert.equal(fieldState.UNKNOWN, f.cellState(row_index, column_index));
      });
    });
    assert.equal(false, f.hasMines());
  });

  it('should have mines after mines are assigned', () => {
    const f = field(row_count, column_count);
    f.placeMines([0, 0]);
    assert.equal(true, f.hasMines());
  });
});
