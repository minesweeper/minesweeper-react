import React from 'react';
import Digit from './Digit';
import {times, repeat} from 'lodash';

const Lcd = (props) => {
  const number_of_digits = 3;
  const default_number = 0;
  const number = props.number || default_number;
  const digits = (`${repeat('0', number_of_digits)}${number}`).slice(-number_of_digits);
  const children = times(number_of_digits, (index) => <Digit key={index} digit={digits[index]} />);
  return <div className={props.className}>{children}</div>;
};

export default Lcd;
