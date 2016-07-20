import React from 'react';
import styles from './styles.css';
import styleForCellState from './styleForCellState';
import {isEqual} from 'lodash';

const now = () => (new Date()).getTime();

class Cell extends React.Component {
  constructor(props) {
    super(props);
    props.game.onCellStateChange(
      (cell, state) => {
        if (isEqual(cell, props.position)) {
          const style = styles[styleForCellState(state)];
          this.setState({style: style});
        }
      }
    );
    this.onMouseDown = (event) => {
      event.preventDefault();
    };
    this.onMouseUp = (event) => {
      event.preventDefault();
      props.game.reveal(props.position);
    };
    this.onDoubleClick = (event) => {
      event.preventDefault();
      props.game.chord(props.position);
    };
    this.onRightClick = (event) => {
      event.preventDefault();
      props.game.mark(props.position);
    };
    this.onTouchStart = (event) => {
      this.setState({touchStart: now(), touchStartPosition: props.position});
    };
    this.onTouchEnd = (event) => {
      if (props.positon !== this.state.touchStartPosition) {
        const duration = now() - this.state.touchStart;
        if (duration < 500) {
          props.game.reveal(props.position);
        } else {
          props.game.mark(props.position);
        }
      }
    };

    this.state = { style: styles.unknown };
  }

  render() {
    const className = `${styles.field} ${this.state.style}`;
    return <td onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onDoubleClick={this.onDoubleClick} onContextMenu={this.onRightClick} onTouchEnd={this.onTouchEnd} onTouchStart={this.onTouchStart} className={className} />;
  }
}

export default Cell;
