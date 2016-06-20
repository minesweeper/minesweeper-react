import React from 'react';
import Digit from './Digit';

const Lcd = (props) => {
  const digits = ("000"+props.number).slice(-3);

  return (
    <div className={props.className}>
      <Digit digit={digits[0]} />
      <Digit digit={digits[1]} />
      <Digit digit={digits[2]} />
    </div>
  );
};

export default Lcd;
