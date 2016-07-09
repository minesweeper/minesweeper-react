import styleForCellState from '.';
import {cellStates} from 'mines';
import {times} from 'lodash';

describe('styleForCellState', () => {
  times(9, (count) => {
    it(`should transform ${cellStates[count]} to mines${count}`, () => {
      expect(styleForCellState(cellStates[count])).toBe(`mines${count}`);
    });
  });

  it(`should transform ${cellStates.MARKED} to marked`, () => {
    expect(styleForCellState(cellStates.MARKED)).toBe('marked');
  });

  it(`should transform ${cellStates.QUESTION} to question`, () => {
    expect(styleForCellState(cellStates.QUESTION)).toBe('question');
  });

  it(`should transform ${cellStates.MINE} to mine`, () => {
    expect(styleForCellState(cellStates.MINE)).toBe('mine');
  });

  it(`should transform ${cellStates.EXPLODED_MINE} to exploded-mine`, () => {
    expect(styleForCellState(cellStates.EXPLODED_MINE)).toBe('exploded-mine');
  });

  it(`should transform ${cellStates.INCORRECTLY_MARKED_MINE} to incorrectly-marked-mine`, () => {
    expect(styleForCellState(cellStates.INCORRECTLY_MARKED_MINE)).toBe('incorrectly-marked-mine');
  });

  it('should transform anything else to unknown', () => {
    expect(styleForCellState('portishead')).toBe('unknown');
  });
});
