import styleForCellState from '.';
import fieldState from 'mines/dist/fieldState';
import {times} from 'lodash';

describe('styleForCellState', () => {
  times(9, (count) => {
    it(`should transform ${fieldState[count]} to mines${count}`, () => {
      expect(styleForCellState(fieldState[count])).toBe(`mines${count}`);
    });
  });

  it(`should transform ${fieldState.MARKED} to marked`, () => {
    expect(styleForCellState(fieldState.MARKED)).toBe('marked');
  });

  it(`should transform ${fieldState.QUESTION} to question`, () => {
    expect(styleForCellState(fieldState.QUESTION)).toBe('question');
  });

  it(`should transform ${fieldState.MINE} to mine`, () => {
    expect(styleForCellState(fieldState.MINE)).toBe('mine');
  });

  it(`should transform ${fieldState.EXPLODED_MINE} to exploded-mine`, () => {
    expect(styleForCellState(fieldState.EXPLODED_MINE)).toBe('exploded-mine');
  });

  it(`should transform ${fieldState.INCORRECTLY_MARKED_MINE} to incorrectly-marked-mine`, () => {
    expect(styleForCellState(fieldState.INCORRECTLY_MARKED_MINE)).toBe('incorrectly-marked-mine');
  });

  it('should transform anything else to unknown', () => {
    expect(styleForCellState('portishead')).toBe('unknown');
  });
});
