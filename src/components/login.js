import Auth0Lock from 'auth0-lock';
import { clientId, domain, redirectUrl } from '../env.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayLogin, hideLogin, login, logout, loginSuccess, getLockStatus, LOCK_DISPLAYED } from '../modules/authorisation';

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

    componentDidUpdate () {
        const { lockStatus } = this.props;
        if (lockStatus === LOCK_DISPLAYED) {
            this.lock.show();
        } else {
            this.lock.hide();
        }
    }

    constructor (props) {
        super(props);
        this.login();
        this.signinSubmitEvent();
        this.authenticatedEvent();
        this.signupErrorEvent();
        this.hideErrorEvent();
    }

    // Lock actions
    displayLogin () {
        this.props.displayLogin();
    }

    hideLogin () {
        this.props.hideLogin();
    }

    login () {
        if (this.props.lockStatus === LOCK_DISPLAYED) {
            this.props.login();
        }
    }

    logout () {
        this.props.logout();
    }

    setSession (authResult) {
        this.props.loginSuccess(authResult);
    }

    clearSession () {
        this.props.logout();
    }

    // Lock events
    signinSubmitEvent () {
        this.lock.on('signin submit', () => { this.login() });
    }

    authenticatedEvent () {
        this.lock.on('authenticated', (authResult) => { this.setSession(authResult) });
    }

    signupErrorEvent () {
        this.lock.on('signup error', () => { this.clearSession() });
    }

    hideErrorEvent () {
        this.lock.on('hide', () => { this.hideLogin() });
    }

    render () {
        return (
            <div>
                <button onClick={ () => this.displayLogin() }>Login</button>
                <button onClick={ () => this.logout() }>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lockStatus: getLockStatus(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
        logout: (data) => dispatch(logout(data)),
        loginSuccess: (data) => dispatch(loginSuccess(data)),
        displayLogin: () => dispatch(displayLogin()),
        hideLogin: () => dispatch(hideLogin())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);