import React from 'react';
import Bottom from './';
import Cell from './Cell';
import {times} from 'lodash';
import styles from './styles.css';

describe('Bottom', () => {
  it('should render as a table with lots of cells', () => {
    styles.bottom = 'bottom';
    styles.unclicked = 'unclicked';
    styles.field = 'field';

    const row_count = 2;
    const column_count = 3;
    const game = {dimensions: [row_count, column_count]};
    const context = {game: game};
    const tree = sd.shallowRender(<Bottom />, context);

    const rows = times(row_count, (row) => {
      const cols = times(column_count, (col) => <Cell game={game} key={`${row}.${col}`} position={[row, col]} />);
      return <tr key={row}>{cols}</tr>;
    });

    expect(tree.getRenderOutput()).toEqualJSX(
      <div className='bottom'>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  });
});
