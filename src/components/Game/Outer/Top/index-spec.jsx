import React from 'react';
import Top from './';
import Lcd from './Lcd';
import Status from './Status';

import styles from './styles.css';

describe('Top', () => {
  it('should render', () => {
    styles.top = 'top';
    styles.minesRemaining = 'minesRemaining';
    styles.status = 'ok';
    styles.timer = 'timer';

    const tree = sd.shallowRender(<Top />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <div className='top'>
        <Lcd number={99} className='minesRemaining' />
        <Status className='ok' />
        <Lcd number={0} className='timer' />
      </div>
    );
  });
});
