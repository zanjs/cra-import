import React, { Component } from 'react';

const importPromise = import('./ModuleA');

class App extends Component {
  handleClick = () => {
      importPromise
      .then(({ moduleA }) => {
        // Use moduleA
        alert(moduleA);
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
