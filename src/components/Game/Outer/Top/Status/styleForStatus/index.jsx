import {gameStates} from 'mines';

const map = {};
map[gameStates.NOT_STARTED] = 'alive';
map[gameStates.STARTED] = 'alive';
map[gameStates.LOST] = 'dead';
map[gameStates.WON] = 'won';

export default (state) => map[state] || 'unknown';
