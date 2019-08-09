import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Store/Actions/actionsIndex';
import * as actionTypes from '../../../Store/Actions/actions';

class Logout extends Component {

    componentDidMount() {
        this.props.onLogout();
        this.props.onClearOrderBasket();
    };

    render() {
        return (
            <Redirect to='/offer' />
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
        onClearOrderBasket: () => dispatch({ type: actionTypes.CLEAR_BASKET }),
    };
};

export default connect(null, mapDispatchToProps)(Logout);