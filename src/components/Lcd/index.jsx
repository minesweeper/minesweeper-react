import React from 'react';
import Digit from './Digit';
import {times, repeat} from 'lodash';

const Lcd = (props) => {
  const default_number_digits = 3;
  const default_number = 0;
  const number_digits = props.numberdigits || default_number_digits;
  const number = props.number || default_number;
  const digits = (`${repeat('0', number_digits)}${number}`).slice(-number_digits);
  const children = times(number_digits, (index) => <Digit key={index} digit={digits[index]} />);
  return <div className={props.className}>{children}</div>;
};

export default Lcd;
