import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/profile';
import { getSelectedProfile, selectProfile } from '../modules/armySelection';

class unitProfileProvider extends Component {

    render () {
        const {  getSelectedProfile } = this.props;
        return (
            <Profile
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
        selectProfile: (data) => dispatch(selectProfile(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(unitProfileProvider);