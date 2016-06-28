import fieldState from 'mines/dist/fieldState';
import {times} from 'lodash';

const map = {};
times(9, (count) => { map[fieldState[count]] = `mines${count}`; });
map[fieldState.MARKED] = 'marked';
map[fieldState.QUESTION] = 'question';
map[fieldState.MINE] = 'mine';
map[fieldState.EXPLODED_MINE] = 'exploded-mine';
map[fieldState.INCORRECTLY_MARKED_MINE] = 'incorrectly-marked-mine';

export default (state) => map[state] || 'unknown';
