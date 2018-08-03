import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isAuthorised } from '../modules/authorisation';

const Authorised = (WrappedComponent) => {
    return class extends Component {
        render() {
            return this.props.isAuthorised ? <WrappedComponent { ...this.props} /> : null;
        }
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthorised: isAuthorised(state)
    };
};

export default compose(connect(mapStateToProps, null), Authorised);