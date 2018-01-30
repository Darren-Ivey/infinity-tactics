import React from 'react';

const Profile = ({selectedProfile}) => {
    return (
        selectedProfile ?
        <div>
            <p>Selected Profile:{ selectedProfile }</p>
        </div> : <div>Loading profile...</div>
    );
};

export default Profile;