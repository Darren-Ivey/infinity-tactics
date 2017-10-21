import React, { Component } from 'react';
import './App.css';
import Army from './pages/army';

class App extends Component {

    constructor(props) {
        super(props);
        const {route} = this.props.match.params;
        this.state = {
            route
        };
    }

    render() {

    return (
      <div className="App">
          <h1>Infinity Tactics</h1>
        <div className="App-intro">
          <Army route={ this.state.route } />
        </div>
      </div>
    );
  }
}

export default App;
