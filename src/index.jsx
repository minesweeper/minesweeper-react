import React from 'react';
import {render} from 'react-dom';

const element = document.getElementById('game');

render(
  <div className="minesweeper">
    <div className="title">
      <span className="title-left"></span>
      <span className="title-right"></span>
    </div>
  </div>, element
);
