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
      this.setState({clickStart: now()});
    };
    this.onMouseUp = (event) => {
      event.preventDefault();
      const duration = now() - this.state.clickStart;
      if (duration < 500) {
        props.game.reveal(props.position);
      } else {
        props.game.mark(props.position);
      }
    };
    this.state = { style: styles.unknown };
  }

  render() {
    const className = `${styles.field} ${this.state.style}`;
    return <td onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} className={className} />;
  }
}

export default Cell;
