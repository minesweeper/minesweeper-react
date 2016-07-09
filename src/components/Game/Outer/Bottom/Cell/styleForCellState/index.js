import {cellStates} from 'mines';
import {times} from 'lodash';

const map = {};
times(9, (count) => { map[cellStates[count]] = `mines${count}`; });
map[cellStates.MARKED] = 'marked';
map[cellStates.QUESTION] = 'question';
map[cellStates.MINE] = 'mine';
map[cellStates.EXPLODED_MINE] = 'exploded-mine';
map[cellStates.INCORRECTLY_MARKED_MINE] = 'incorrectly-marked-mine';

export default (state) => map[state] || 'unknown';
