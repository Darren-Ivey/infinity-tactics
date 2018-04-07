import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/profile';
import { getSelectedProfile, selectProfile } from '../modules/armySelection';
import { submitTactics } from '../modules/tactics';

class unitProfileProvider extends Component {

    render () {
        const {  getSelectedProfile, submitTactics } = this.props;
        return (
            <Profile
                submitTactics={ submitTactics }
                selectedProfile={ getSelectedProfile }/>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        getSelectedProfile: getSelectedProfile(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectProfile: (data) => dispatch(selectProfile(data)),
        submitTactics: (data) => dispatch(submitTactics(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(unitProfileProvider);