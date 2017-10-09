import React, { Component } from 'react';
import { map } from 'lodash/collection';

class ArmySelection extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(army) {
        this.props.selectArmy(army);
        console.log(this.props.getUnits[this.props.getArmy])
    }

    render() {
        return (
            <div>
                <h2>
                    Selected Army: { this.props.getArmy }
                </h2>
                <div className="army-selection">
                    { map(this.props.getArmyListOptions, (item, id) => <li onClick={() => this.handleOnClick(item)} key={ id } >{ item }</li>) }
                </div>
                <div>
                    { map(this.props.getUnits[this.props.getArmy], (item, id) => <li key={ id } >{ item }</li>) }
                </div>
            </div>
        );
    }
}

export default ArmySelection;