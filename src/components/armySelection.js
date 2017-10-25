import React, { Component } from 'react';
import { map } from 'lodash/collection';
import { Link } from 'react-router-dom';
import './armySelection.css';

class ArmySelection extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        this.props.selectArmy(e.target.text)
    }

    render() {
        const { getUnits, getArmy} = this.props;
        const selection = getUnits[getArmy];

        return (
            <div>
                <h2>{ this.props.getArmy }</h2>
                <div className="navigation">
                    { map(this.props.getArmyListOptions, (item, id) =>
                        <Link onClick={ (e) => { this.handleOnClick(e)}} to={ item } className="navigation__item" key={ id } >{ item }</Link>) }
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