import Auth0Lock from 'auth0-lock';
import { clientId, domain, redirectUrl } from '../env.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout, loginSuccess } from '../modules/authorisation';

class Login extends Component {

    lock =  new Auth0Lock(clientId, domain, {
        auth: {
            redirectUrl,
            responseType: 'token id_token',
            scope: 'openid profile email',
            audience: 'https://infinity-tactics.com/api'
        },
        autoclose: true,
        closable: true,
        avatar: false,
        languageDictionary: {
            title: "Infinity Tactics"
        },
        primaryColor: 'blue',
        theme: {
            primaryColor: 'blue'
        }
    });

    constructor (props) {
        super(props);
        this.login();
    }

    authenticate () {
        this.props.login();
        this.lock.show();
    }

    setSession (authResult) {
        this.props.loginSuccess(authResult);
    }

    login () {
        this.lock.on('authenticated', this.setSession.bind(this) );
    }

    logout () {
        this.props.logout();
        this.lock.hide();
    }

    render () {
        return (
            <div>
                <button onClick={ () => this.authenticate() }>Login</button>
                <button onClick={ () => this.logout() }>Logout</button>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
        logout: (data) => dispatch(logout(data)),
        loginSuccess: (data) => dispatch(loginSuccess(data))
    };
};

export default connect(null, mapDispatchToProps)(Login);