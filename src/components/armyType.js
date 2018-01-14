import React, { Component } from 'react';
import { map } from 'lodash/collection';
import './armySelection.css';
import Profile from './profile'

class ArmyType extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(key) {
        this.props.selectProfile(key);
    }

    renderListItem(item) {
        const value = item.name;
        const key = item.id
        return <li onClick={ () => {this.handleOnClick(key)} } key={ `light-${key}` } >{ value }</li>
    };

    render() {
        const { getUnits, getArmy, getSelectedProfile } = this.props;
        const selection = getUnits[getArmy];

        return (
            <div>
                <div>
                    <article>
                        <h3>Light Infantry</h3>
                        { map( selection.li, (item) => this.renderListItem(item)) }
                    </article>
                    <article>
                        <h3>Medium Infantry</h3>
                        { map( selection.md, (item) => this.renderListItem(item)) }
                    </article>
                    <article>
                        <h3>Heavy Infantry</h3>
                        { map( selection.hi, (item) => this.renderListItem(item)) }
                    </article>
                    <article>
                        <h3>TAG</h3>
                        { map( selection.tag, (item) => this.renderListItem(item)) }
                    </article>
                    <article>
                        <h3>Remote</h3>
                        { map( selection.rem, (item) => this.renderListItem(item)) }
                    </article>
                    <article>
                        <h3>Skirmisher</h3>
                        { map( selection.sk, (item) => this.renderListItem(item)) }
                    </article>
                </div>
                <div>
                      <Profile selectedProfile={ getSelectedProfile } />
                </div>
            </div>
        );
    }
}

export default ArmyType;