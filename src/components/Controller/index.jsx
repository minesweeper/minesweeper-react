import React from 'react';

class Controller extends React.Component {
  render() {
    return(
      <div>
        <div className="playPause" />
        <div className="gamesWon" />
        <div className="gamesLost" />
        <div className="speed" />
        CONTROLLING {this.props.name}
      </div>
    );
  }
}

export default Controller;
