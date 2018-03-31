import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getAppStatus, appUnloaded } from './modules/appStatus';
import ArmySelectionProvider from './providers/armySelection';
import UnitProfileProvider from './providers/unitProfile';
import UnitTypesProvider from './providers/unitTypes';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.props.appUnloaded();
    }

    render() {
        return (
            <div className="App">
                <div className="App">
                    <Link to="/" ><h1>Infinity Tactics</h1></Link>
                    <div className="App-intro">
                        <Switch>
                            <Route component={ ArmySelectionProvider } exact path="/" />
                            <Route component={ UnitProfileProvider } path="/profile" />
                            <Route component={ UnitTypesProvider } path="/units" />
                        </Switch>
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
