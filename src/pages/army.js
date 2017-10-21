import React from 'react';
import { connect } from 'react-redux';
import ArmySelection from '../components/armySelection';
import { selectArmy, getArmy, getUnits, getArmyListOptions } from '../modules/armySelection';

const Army = ({ selectArmy, getArmy, getUnits, getArmyListOptions, route }) => {
        return (
            <ArmySelection
                selectArmy={ selectArmy }
                getArmy={ getArmy }
                getUnits={ getUnits }
                getArmyListOptions={ getArmyListOptions }
                route={ route } />
        );
    }

const mapStateToProps = (state) => {
    return {
        getArmy: getArmy(state),
        getUnits: getUnits(state),
        getArmyListOptions: getArmyListOptions(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectArmy: (data) => dispatch(selectArmy(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Army);