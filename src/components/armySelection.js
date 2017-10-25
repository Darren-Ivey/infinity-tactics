import React, { Component } from 'react';
import { map } from 'lodash/collection';
import { Link } from 'react-router-dom';
import './armySelection.css';

class ArmySelection extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(key) {
        this.props.selectArmy(key)
    }


    render() {
        const { getUnits, getArmy} = this.props;
        const selection = getUnits[getArmy];

        const renderListItem = (item) => {
            const value = Object.values(item)[0];
            const key = Object.keys(item)[0];
            return <Link onClick={ () => { this.handleOnClick(key)}} to={ key } className="navigation__item" key={ key } >{ value }</Link>
        }

        return (
            <div>
                <h2>{ this.props.getArmy }</h2>
                <div className="navigation">
                    {
                        map(this.props.getArmyListOptions, (item) => {
                            return renderListItem(item);
                        })
                    }
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