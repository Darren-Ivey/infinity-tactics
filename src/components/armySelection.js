import React, { Component } from 'react';
import { map } from 'lodash/collection';

class ArmySelection extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(army) {
        this.props.selectArmy(army);
    }

    render() {

        const selection = this.props.getUnits[this.props.getArmy];

        return (
            <div>
                <h2>
                    Selected Army: { this.props.getArmy }
                </h2>
                <div className="army-selection">
                    { map(this.props.getArmyListOptions, (item, id) => <li onClick={() => this.handleOnClick(item)} key={ id } >{ item }</li>) }
                </div>
                <article>
                    <h3>Light Infantry</h3>
                    { map(selection.li, (item, id) => <li key={ id } >{ item }</li>) }
                </article>
                <article>
                    <h4>Medium Infantry</h4>
                    { map(selection.md, (item, id) => <li key={ id } >{ item }</li>) }
                </article>
                <article>
                    <h4>Heavy Infantry</h4>
                    { map(selection.hi, (item, id) => <li key={ id } >{ item }</li>) }
                </article>
            </div>
        );
    }
}

export default ArmySelection;