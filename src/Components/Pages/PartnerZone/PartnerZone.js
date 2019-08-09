import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavWrapper from '../../Navigation/NavWrapper/NavWrapper';
import './PartnerZone.css';
import Auth from '../../Auth/Auth';
import CoursesPurchasedWrapper from '../../CoursesPurchased/CoursesPurchasedWrapper/CoursesPurchasedWrapper';


class PartnerZone extends Component {

    render() {
        return (
            <>
                <NavWrapper />
                {this.props.userIsAuthenticated ? <CoursesPurchasedWrapper /> : <Auth />}
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        userIsAuthenticated: state.AuthReducer.token !== null
    }
}

export default connect(mapStateToProps)(PartnerZone);