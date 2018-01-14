import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArmySelection from '../components/armySelection';
import ArmyType from '../components/armyType';
import Profile from '../components/profile';
import { getSelectedProfile, selectProfile, selectArmy, getStatus, getArmy, getUnits, getArmyListOptions } from '../modules/armySelection';

class Army extends Component {

    renderArmySelection () {
        const { selectArmy, getArmy, getArmyListOptions } = this.props;
        return (
            <ArmySelection
                getArmy={ getArmy }
                selectArmy={ selectArmy }
                getArmyListOptions={ getArmyListOptions }/>
        );
    }

    renderArmyType () {
        const { selectProfile,
            getArmy, getUnits } = this.props;
        return (
            <ArmyType
                selectProfile={ selectProfile }
                getArmy={ getArmy }
                getUnits={ getUnits }/>
        );
    }

    renderProfile () {
        const {  getSelectedProfile } = this.props;
        return (
            <Profile
                selectedProfile={ getSelectedProfile }/>
        );
    }

    render() {
        const { status } = this.props;

        switch(status) {
            case 'ARMY_SELECTED':
                console.log("ARMY_SELECTED: ", status)
                return this.renderArmyType();
            case 'PROFILE_SELECTED':
                console.log("PROFILE_SELECTED: ", status)
                return this.renderProfile();
            default:
                console.log("Default: ", status)
                return this.renderArmySelection();
        }

    }
};

const mapStateToProps = (state) => {
    return {
        getArmy: getArmy(state),
        getUnits: getUnits(state),
        getArmyListOptions: getArmyListOptions(state),
        getSelectedProfile: getSelectedProfile(state),
        status: getStatus(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectArmy: (data) => dispatch(selectArmy(data)),
        selectProfile: (data) => dispatch(selectProfile(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Army);