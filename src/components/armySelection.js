import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { map } from 'lodash/collection';
import { selectArmy } from '../actions/armySelection';

class ArmySelection extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);

        this.state = {
            armyListOptions: [
                'PanOceania',
                'Yu Jing',
                'Ariadna',
                'Haqqislam',
                'Nomadas',
                'Combined Army',
                'Aleph',
                'tohaa'
            ]
        }
    }

    handleOnClick(item) {
        selectArmy(item);
    }

    render() {
        return (
            <div className="army-selection">
                { map(this.state.armyListOptions, (item, id) => <li onClick={() => this.handleOnClick(item)} key={ id } >{ item }</li>) }
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        armySelection: state.armySelection
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(selectArmy, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmySelection);