import React, { Component } from 'react';
import { map, filter } from 'lodash/collection';
import './armySelection.css';
import Profile from './profile';
import { Link } from 'react-router-dom';

class ArmyType extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(key) {
        this.props.selectProfile(key);
    }

    renderListItem(item) {
        const value = item.common_name;
        const key = item.id_name;
        const { getArmy } = this.props;

        return <li key={ `${value}-${key}` }><Link to={ `${getArmy}/${key}` } onClick={ () => {this.handleOnClick(key)} } >{ value }</Link></li>
    };

    renderArmyTypes () {
        const { getUnits, getArmy, getSelectedProfile } = this.props;
        const selection = getUnits[getArmy];

        return(
            <div>
                <div>
                    <article>
                        <h3>Light Infantry</h3>
                        <ul>{ map(filter(selection, {'type': 'li'}), (item) => this.renderListItem(item)) }</ul>
                    </article>
                    {/*<article>*/}
                        {/*<h3>Medium Infantry</h3>*/}
                        {/*<ul>{ map( selection.md, (item) => this.renderListItem(item)) }</ul>*/}
                    {/*</article>*/}
                    {/*<article>*/}
                        {/*<h3>Heavy Infantry</h3>*/}
                        {/*<ul>{ map( selection.hi, (item) => this.renderListItem(item)) }</ul>*/}
                    {/*</article>*/}
                    {/*<article>*/}
                        {/*<h3>TAG</h3>*/}
                        {/*<ul>{ map( selection.tag, (item) => this.renderListItem(item)) }</ul>*/}
                    {/*</article>*/}
                    {/*<article>*/}
                        {/*<h3>Remote</h3>*/}
                        {/*<ul>{ map( selection.rem, (item) => this.renderListItem(item)) }</ul>*/}
                    {/*</article>*/}
                    {/*<article>*/}
                        {/*<h3>Skirmisher</h3>*/}
                        {/*<ul>{ map( selection.sk, (item) => this.renderListItem(item)) }</ul>*/}
                    {/*</article>*/}
                </div>
                <div>
                    <Profile selectedProfile={ getSelectedProfile } />
                </div>
            </div>
        )
    }

    renderLoader() {
        return <p>Loading...</p>
    }

    render() {
        const { getUnits } = this.props

        return (getUnits ? this.renderArmyTypes() : this.renderLoader())
    }
}

export default ArmyType;