import React, { Component } from 'react';
import './App.css';
import Army from './pages/army';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Army />
        </div>
      </div>
    );
  }
}

export default App;
