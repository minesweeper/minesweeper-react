import styleForStatus from '.';
import {gameStates} from 'mines';

describe('styleForCellState', () => {
  it(`should transform ${gameStates.NOT_STARTED} to alive`, () => {
    expect(styleForStatus(gameStates.NOT_STARTED)).toBe('alive');
  });

  it(`should transform ${gameStates.STARTED} to alive`, () => {
    expect(styleForStatus(gameStates.STARTED)).toBe('alive');
  });

  it(`should transform ${gameStates.LOST} to dead`, () => {
    expect(styleForStatus(gameStates.LOST)).toBe('dead');
  });

  it(`should transform ${gameStates.WON} to won`, () => {
    expect(styleForStatus(gameStates.WON)).toBe('won');
  });

  it('should transform anything else to unknown', () => {
    expect(styleForStatus('fatboyslim')).toBe('unknown');
  });
});
