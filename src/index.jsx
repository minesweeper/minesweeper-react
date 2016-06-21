import React from 'react';
import {render} from 'react-dom';
import Game from './components/Game';
import _ from 'lodash';

const renderComponent = (element) => {
  render(<Game />, element);
};

_.each(document.getElementsByClassName("minesweeper-game"), renderComponent);
