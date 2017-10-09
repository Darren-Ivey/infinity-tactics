import React, { Component } from 'react';
import { map } from 'lodash/collection';

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
        //console.log(this.props.state)
    }

    handleOnClick(army) {
        this.props.selectArmy(army);
    }

    render() {
        return (
            <div>
                <h2>
                    Selected Army: { this.props.getArmy }
                </h2>
                <div className="army-selection">
                    { map(this.state.armyListOptions, (item, id) => <li onClick={() => this.handleOnClick(item)} key={ id } >{ item }</li>) }
                </div>
            </div>
        );
    }
}

export default ArmySelection;