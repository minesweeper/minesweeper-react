import React from 'react';
import {render} from 'react-dom';
import Game from './components/Game';
import {each} from 'lodash';

const renderComponent = (element) => {
  render(<Game />, element);
};

each(document.getElementsByClassName("minesweeper-game"), renderComponent);
