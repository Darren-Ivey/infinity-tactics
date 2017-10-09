import React from 'react';
import { connect } from 'react-redux';
import ArmySelection from './armySelection';
import { selectArmy, getArmy, getState } from '../modules/armySelection';

const Army = ({ selectArmy, getArmy, getState }) => {
        return (
            <div>
                <h2>Select</h2>
            <ArmySelection
                selectArmy={ selectArmy }
                getArmy={ getArmy }
                getState={ getState }/>
            </div>
        );
    }

const mapStateToProps = (state) => {
    return {
        getArmy: getArmy(state),
        getState: getState(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectArmy: (data) => dispatch(selectArmy(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Army);