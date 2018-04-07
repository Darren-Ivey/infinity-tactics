import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tactic: '',
            selectedProfile: this.props.selectedProfile
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            tactic: e.target.value
        });
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.submitTactics(this.state.tactic);
    }

    renderForm () {
        return (
            <form onSubmit={ this.handleSubmit }>
                <textarea value={ this.state.tactic } onChange={ this.handleChange } type="text" placeholder="tactic" name="tactic" />
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
                <p>Selected Profile:{ this.state.selectedProfile }</p>
                { this.renderForm() }
            </div>
        )
    }

    render () {
        return this.props.selectedProfile ? this.renderProfile() : this.renderLoader();
    }
}

export default Profile;