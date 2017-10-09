import React from 'react';
import { connect } from 'react-redux';
import ArmySelection from './armySelection';
import { selectArmy, getArmy, getState, getArmyListOptions } from '../modules/armySelection';

const Army = ({ selectArmy, getArmy, getState, getArmyListOptions }) => {
        return (
            <div>
                <h2>Select</h2>
            <ArmySelection
                selectArmy={ selectArmy }
                getArmy={ getArmy }
                getState={ getState }
                getArmyListOptions={ getArmyListOptions }/>
            </div>
        );
    }

const mapStateToProps = (state) => {
    return {
        getArmy: getArmy(state),
        getState: getState(state),
        getArmyListOptions: getArmyListOptions(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectArmy: (data) => dispatch(selectArmy(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Army);