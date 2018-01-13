import React, { Component } from 'react';
import { map } from 'lodash/collection';
import './armySelection.css';

class ArmyType extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(key) {
        this.props.selectProfile(key);
    }

    renderListItem(item) {
        const value = Object.values(item)[0];
        const key = Object.keys(item)[0];
        return <li onClick={ () => {this.handleOnClick(key)} } key={ `light-${key}` } >{ value }</li>
    };

    render() {
        const { getUnits, getArmy} = this.props;
        const selection = getUnits[getArmy];

        return (
            <div>
                <article>
                    <h3>Light Infantry</h3>
                    { map( selection.li, (item) => this.renderListItem(item)) }
                </article>
            </div>
        );
    }
}

export default ArmyType;