import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Pages/Home/Home';
import OfferList from '../Pages/Offer/OfferList/OfferList';
import PartnerZone from '../Pages/PartnerZone/PartnerZone';
import OfferPage from '../Pages/Offer/OfferPage/OfferPage';
import Basket from '../Pages/Basket/Basket';
import Auth from '../Auth/Auth';
import PasswordReset from '../PasswordReset/PasswordReset';
import Logout from '../Auth/Logout/Logout';
import About from '../Pages/About/About';
import * as actions from '../../Store/Actions/actionsIndex';


class WrappingPage extends Component {
    // state = {  }

    componentWillMount() {
        this.props.oncheckCurrentAuthState();
    };

    render() {
        return (
            <>
                <Switch>
                    <Route path='/offer/:id' component={OfferPage} />
                    <Route path='/offer' component={OfferList} />
                    <Route path='/partnerZone' component={PartnerZone} />
                    <Route path='/basket' component={Basket} />
                    <Route path='/auth' component={Auth} />
                    <Route path='/logout' component={Logout} />
                    <Route path='/passwordReset' component={PasswordReset} />
                    <Route path='/about' component={About} />
                    <Route path='/' component={Home} />
                </Switch>
            </>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        oncheckCurrentAuthState: () => dispatch(actions.checkAuthStatus())
    };
};

export default connect(null, mapDispatchToProps)(WrappingPage);