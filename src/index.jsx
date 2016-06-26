import React from 'react';
import {render} from 'react-dom';
import Game from './components/Game';
import mines from 'mines';
import {each} from 'lodash';

global.mines = mines;

const renderComponent = (element) => {
  render(<Game />, element);
};

each(document.getElementsByClassName("minesweeper-game"), renderComponent);
