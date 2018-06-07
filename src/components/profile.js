import React, { Component } from 'react';
import { map, size } from 'lodash/collection';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tactic: '',
            selectedProfile: this.props.selectedProfile
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.props.fetchTactics();
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

    renderTactics ({tactic}, id) {
        return (
            <li key={ `tactic-${id}` }>{ tactic }</li>
        )
    }

    renderLoader () {
        return <div>Loading profile...</div>
    }

    renderProfile () {
        const { profileTactics } = this.props;
        const { selectedProfile } = this.state;

        return(
            <div>
                <p>Selected Profile:{ selectedProfile }</p>
                { this.renderForm() }
                { size(profileTactics) ? map(profileTactics, (tactic, id) => this.renderTactics(tactic, id)) : null }
            </div>
        )
    }

    render () {
        return this.props.selectedProfile ? this.renderProfile() : this.renderLoader();
    }
}

export default Profile;