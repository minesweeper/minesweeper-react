import field from '.';
import fieldState from './fieldState';
import _ from 'lodash';

describe('field', () => {
  it('should be initialised with all cells having UNKNOWN cell state', () => {
    const row_count = 1;
    const column_count = 3;
    const f = field(row_count, column_count);
    _.forEach(_.range(row_count), (row_index) => {
      _.forEach(_.range(column_count), (column_index) => {
        assert.equal(fieldState.UNKNOWN, f.cellState(row_index, column_index));
      });
    });
  });
});
