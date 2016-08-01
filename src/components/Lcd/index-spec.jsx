import React from 'react';
import Digit from './Digit';
import Lcd from './index.jsx';

describe('Lcd', () => {
  it('should render default number of 000', () => {
    const tree = sd.shallowRender(<Lcd className="theClassName" />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <div className='theClassName'>
        <Digit digit='0' />
        <Digit digit='0' />
        <Digit digit='0' />
      </div>
    );
  });

  it('should render each digit of 3 digit number', () => {
    const tree = sd.shallowRender(<Lcd className="theClassName" number='321' />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <div className='theClassName'>
        <Digit digit='3' />
        <Digit digit='2' />
        <Digit digit='1' />
      </div>
    );
  });

  it('can render a 1 digit number', () => {
    const tree = sd.shallowRender(<Lcd className="theClassName" number='8' numberdigits='1' />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <div className='theClassName'>
        <Digit digit='8' />
      </div>
    );
  });

  it('should drop any extra digits', () => {
    const tree = sd.shallowRender(<Lcd className="theClassName" number='54321' />);
    expect(tree.getRenderOutput()).toEqualJSX(
      <div className='theClassName'>
        <Digit digit='3' />
        <Digit digit='2' />
        <Digit digit='1' />
      </div>
    );
  });
});
