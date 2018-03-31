import React, { Component } from 'react';
import { connect } from 'react-redux';
import Units from '../components/units';
import { selectProfile, getArmy, getUnits } from '../modules/armySelection';

class UnitTypesProvider extends Component {

    render () {
        const { selectProfile, getArmy, getUnits } = this.props;
        return (
            <Units
                selectProfile={ selectProfile }
                getArmy={ getArmy }
                getUnits={ getUnits }/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getArmy: getArmy(state),
        getUnits: getUnits(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectProfile: (data) => dispatch(selectProfile(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitTypesProvider);