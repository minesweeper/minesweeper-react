import React from 'react';
import {render} from 'react-dom';
import Game from './components/Game';
import mines from 'mines';
import {each} from 'lodash';

global.games = [];

const renderComponent = (element) => {
  const game = mines();
  global.games.push(game);
  render(<Game game={game} />, element);
};

each(document.getElementsByClassName("minesweeper-game"), renderComponent);
