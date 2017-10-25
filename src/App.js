import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Army from './pages/army';
import { getAppStatus, appUnloaded } from './modules/appStatus';

class App extends Component {

    constructor(props) {
        super(props);
        this.props.appUnloaded();
    }

    render() {
    return (
        <div className="App">
            <div className="App">
                <h1>Infinity Tactics</h1>
                <div className="App-intro">
                    <Army />
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        status: getAppStatus(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        appUnloaded: () => dispatch(appUnloaded())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
