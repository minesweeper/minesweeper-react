import React from 'react';
import {render} from 'react-dom';
import Controller from '../components/Controller';
import {each} from 'lodash';

const renderComponent = (element) => {
  render(<Controller />, element);
};

each(document.getElementsByClassName("minesweeper-controller"), renderComponent);
