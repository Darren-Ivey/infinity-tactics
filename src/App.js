import React, { Component } from 'react';
import './App.css';
import Army from './pages/army';

class App extends Component {

    render() {
    return (
      <div className="App">
          <h1>Infinity Tactics</h1>
        <div className="App-intro">
          <Army />
        </div>
      </div>
    );
  }
}

export default App;
