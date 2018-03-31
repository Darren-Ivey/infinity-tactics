import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selectedProfile: this.props.selectedProfile
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log(e.target.value)
    }

    renderForm () {
        return (
            <form onSubmit={ this.handleSubmit }>
                <textarea value={ this.state.value } onChange={ this.handleChange } type="text" placeholder="tactic" name="tactic" />
                <button type="submit">Submit</button>
            </form>
        )
    }

    renderLoader () {
        return <div>Loading profile...</div>
    }

    renderProfile () {
        return(
            <div>
                <p>Selected Profile:{ this.selectedProfile }</p>
                { this.renderForm() }
            </div>
        )
    }

    render () {
        return this.props.selectedProfile ? this.renderProfile() : this.renderLoader();
    }
}

export default Profile;