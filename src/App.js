import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getAppStatus, appUnloaded } from './modules/appStatus';
import Army from './pages/army';
import { Route } from 'react-router-dom';
import { goBack } from 'react-router-redux';

class App extends Component {

    constructor(props) {
        super(props);
        this.props.appUnloaded();
    }

    render() {

        const { back } = this.props;

        return (
            <div className="App">
                <div className="App">
                    <h1>Infinity Tactics</h1>
                    <p onClick={ () => back() }>Back</p>
                    <div className="App-intro">
                        <Route component={ Army } path="/"  />
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
        appUnloaded: () => dispatch(appUnloaded()),
        back: () => dispatch(goBack())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
