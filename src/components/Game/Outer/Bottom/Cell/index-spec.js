import React from 'react';
import Cell from './';
import {gameStates, cellStates} from 'mines';
import styles from './styles.css';

describe('Cells', () => {
  let onCellChange = null;
  let tree = null;
  let instance = null;
  const game = {
    onCellStateChange: (onCellStateChangeCb) => { onCellChange = onCellStateChangeCb; },
    state: () => gameStates.NOT_STARTED
  };
  const cell = [0, 0];

  beforeEach('set up component', () => {
    styles.field = 'field';
    styles.unknown = 'unknown';
    styles.marked = 'marked';
    styles.question = 'question';
    styles.mines0 = 'mines0';
    styles.mines1 = 'mines1';
    styles.mines2 = 'mines2';
    styles.mines3 = 'mines3';
    styles.mines4 = 'mines4';
    styles.mines5 = 'mines5';
    styles.mines6 = 'mines6';
    styles.mines7 = 'mines7';
    styles.mines8 = 'mines8';
    styles.mine = 'mine';
    styles['exploded-mine'] = 'exploded-mine';
    styles['incorrectly-marked-mine'] = 'incorrectly-marked-mine';
    tree = sd.shallowRender(<Cell game={game} position={cell}/>);
    instance = tree.getMountedInstance();
  });

  it('should render a child span element with a default status of unknown', () => {
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field unknown' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been marked as flagged', () => {
    onCellChange([0, 0], cellStates.MARKED);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field marked' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been marked as a question', () => {
    onCellChange([0, 0], cellStates.QUESTION);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field question' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been marked as unknown', () => {
    onCellChange([0, 0], cellStates.UNKNOWN);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field unknown' onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as zero', () => {
    onCellChange([0, 0], cellStates[0]);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field mines0'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as one', () => {
    onCellChange([0, 0], cellStates[1]);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field mines1'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as two', () => {
    onCellChange([0, 0], cellStates[2]);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field mines2'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as three', () => {
    onCellChange([0, 0], cellStates[3]);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field mines3'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as four', () => {
    onCellChange([0, 0], cellStates[4]);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field mines4'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as five', () => {
    onCellChange([0, 0], cellStates[5]);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field mines5'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as six', () => {
    onCellChange([0, 0], cellStates[6]);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field mines6'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as seven', () => {
    onCellChange([0, 0], cellStates[7]);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field mines7'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as eight', () => {
    onCellChange([0, 0], cellStates[8]);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field mines8'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as a mine', () => {
    onCellChange([0, 0], cellStates.MINE);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field mine'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as an exploded mine', () => {
    onCellChange([0, 0], cellStates.EXPLODED_MINE);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field exploded-mine'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });

  it('should render a child span element after it has been updated as an incorrectly marked mine', () => {
    onCellChange([0, 0], cellStates.INCORRECTLY_MARKED_MINE);

    tree.reRender(<Cell game={game} position={cell}/>);
    expect(tree.getRenderOutput()).toEqualJSX(
      <td className='field incorrectly-marked-mine'onMouseDown={instance.onMouseDown} onMouseUp={instance.onMouseUp} onDoubleClick={instance.onDoubleClick} onContextMenu={instance.onRightClick} onTouchEnd={instance.onTouchEnd} onTouchStart={instance.onTouchStart}>
      </td>
    );
  });
});
