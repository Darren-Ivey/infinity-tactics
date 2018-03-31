import React, { Component } from 'react';
import { connect } from 'react-redux';
import Army from '../components/army';
import { selectArmy, getArmy, getArmyListOptions } from '../modules/armySelection';

class ArmySelectionPage extends Component {
    render () {
        const { selectArmy, getArmy, getArmyListOptions } = this.props;
        return (
            <Army
                getArmy={ getArmy }
                selectArmy={ selectArmy }
                getArmyListOptions={ getArmyListOptions }/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getArmy: getArmy(state),
        getArmyListOptions: getArmyListOptions(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectArmy: (data) => dispatch(selectArmy(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArmySelectionPage);