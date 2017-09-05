import React, { Component } from 'react';
import './App.css';
import ArmySelection from './components/armySelection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <ArmySelection />
        </div>
      </div>
    );
  }
}

export default App;
