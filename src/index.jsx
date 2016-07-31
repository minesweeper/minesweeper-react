import React from 'react';
import {render} from 'react-dom';
import Game from './components/Game';
import {create} from 'mines';
import {takeTurn} from 'mines-robot';
import {each} from 'lodash';
import {gameStates} from 'mines';

global.games = [];

const renderComponent = (element) => {
  const preset = element.getAttribute('data-preset');

  const game = create({preset: preset});
  global.games.push(game);
  const id = global.games.length;

  if (element.getAttribute('data-robot')) {
    const ms = parseInt(element.getAttribute('data-robot'));
    let won = 0, lost = 0;
    const poll = () => {
      takeTurn(game);
      if (game.state() === gameStates.WON) {
        won += 1;
        game.reset();
        console.log(`${id}: won ${won} and lost ${lost}`); // eslint-disable-line no-console
      }
      if (game.state() === gameStates.LOST) {
        lost += 1;
        game.reset();
        console.log(`${id}: won ${won} and lost ${lost}`); // eslint-disable-line no-console
      }
    };
    setInterval(poll, ms);
  }

  render(<Game game={game} />, element);
};

each(document.getElementsByClassName("minesweeper-game"), renderComponent);
