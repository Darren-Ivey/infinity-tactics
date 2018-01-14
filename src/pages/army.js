import React from 'react';
import { connect } from 'react-redux';
import ArmySelection from '../components/armySelection';
import ArmyType from '../components/armyType';
import { getSelectedProfile, selectProfile, selectArmy, getArmy, getUnits, getArmyListOptions } from '../modules/armySelection';

const Army = ({ selectProfile, selectArmy, getArmy, getUnits, getArmyListOptions, getSelectedProfile }) => {

        const ARMY_SELECTED = 'ARMY_SELECTED';
        const armySelected = getArmy ? ARMY_SELECTED : null;

        switch (armySelected) {

            case ARMY_SELECTED:
                return (
                    <ArmyType
                        selectProfile={ selectProfile }
                        getArmy={ getArmy }
                        getUnits={ getUnits }
                        getSelectedProfile={ getSelectedProfile } />
                );

            default:
                return (
                    <ArmySelection
                        getArmy={ getArmy }
                        selectArmy={ selectArmy }
                        getArmyListOptions={ getArmyListOptions } />
                );
        }

    };

const mapStateToProps = (state) => {
    return {
        getArmy: getArmy(state),
        getUnits: getUnits(state),
        getArmyListOptions: getArmyListOptions(state),
        getSelectedProfile: getSelectedProfile(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectArmy: (data) => dispatch(selectArmy(data)),
        selectProfile: (data) => dispatch(selectProfile(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Army);