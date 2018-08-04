import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/profile';
import { getSelectedProfile, selectProfile } from '../modules/armySelection';
import { submitTactics, getTactics, profileTactics } from '../modules/tactics';

class unitProfileProvider extends Component {

    render () {
        const {  getSelectedProfile, submitTactics, fetchTactics, profileTactics } = this.props;
        return (
            <Profile
                fetchTactics={ fetchTactics }
                submitTactics={ submitTactics }
                selectedProfile={ getSelectedProfile }
                profileTactics={ profileTactics }/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getSelectedProfile: getSelectedProfile(state),
        profileTactics: profileTactics(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectProfile: (data) => dispatch(selectProfile(data)),
        submitTactics: (data) => dispatch(submitTactics(data)),
        fetchTactics: () => dispatch(getTactics()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(unitProfileProvider);