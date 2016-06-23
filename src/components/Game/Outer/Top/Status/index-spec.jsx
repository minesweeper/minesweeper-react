import React from 'react';
import Status from './';

describe('Status', () => {
  it('should render a child span element with a status', () => {
    const tree = sd.shallowRender(<Status className="myStatus" />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <span className='myStatus'>
      </span>
    );
  });
});
