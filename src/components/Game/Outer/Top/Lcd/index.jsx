import React from 'react';
import Digit from './Digit';

const Lcd = (props) => {
  const number_of_digits = 3;
  const first = 0;
  const second = 1;
  const third = 2;
  const digits = (`000${props.number}`).slice(-number_of_digits);

  return (
    <div className={props.className}>
      <Digit digit={digits[first]} />
      <Digit digit={digits[second]} />
      <Digit digit={digits[third]} />
    </div>
  );
};

export default Lcd;
