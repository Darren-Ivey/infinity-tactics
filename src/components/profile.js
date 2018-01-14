import React, { Component } from 'react';
import { map } from 'lodash/collection';
import './armySelection.css';

const Profile = ({selectedProfile}) => {
    return (
        selectedProfile ?
        <div>
            <p>Selected Profile:{ selectedProfile }</p>
        </div> : null
    );
};

export default Profile;