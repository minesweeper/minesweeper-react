import React from 'react';
import styles from './styles.css';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = `${styles.field} ${styles.unclicked}`;
    return <td className={className} />;
  }
}

export default Cell;
