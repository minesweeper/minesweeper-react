import React from 'react';
import {render} from 'react-dom';
import Controller from '../components/Controller';
import {each} from 'lodash';

const renderComponent = (element) => {
  const name = element.getAttribute('data-name');
  render(<Controller name={name} />, element);
};

each(document.getElementsByClassName("minesweeper-controller"), renderComponent);
