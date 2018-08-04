import React from 'react';
import Authorised from './authorised';

const renderProfileForm = ({ handleSubmit, handleChange, tactic }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <textarea value={ tactic }
                      onChange={ handleChange }
                      placeholder="tactic"
                      name="tactic"
                      type="text" />
            <button type="submit">Submit</button>
        </form>
    )
};

const ProfileForm = Authorised(renderProfileForm);

export default ProfileForm;