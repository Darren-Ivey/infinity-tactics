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
        this.props.selectArmy(key);
    }

    render() {
        const { getArmyListOptions} = this.props;

        const renderListItem = (item) => {
            const value = Object.values(item)[0];
            const key = Object.keys(item)[0];
            return <Link onClick={ () => {this.handleOnClick(key)} } to={ key } className="navigation__item" key={ key } >{ value }</Link>
        };

        return (
            <div className="navigation">
                { map( getArmyListOptions, (item) => renderListItem(item)) }
            </div>
        );
    }
}

export default ArmySelection;