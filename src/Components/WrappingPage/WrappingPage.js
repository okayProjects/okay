import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import OfferList from '../Pages/Offer/OfferList/OfferList';
import PartnerZone from '../Pages/PartnerZone/PartnerZone';
import OfferPage from '../Pages/Offer/OfferPage/OfferPage';
import Basket from '../Pages/Basket/Basket';
import Auth from '../Auth/Auth';
// import Form from '../Form/Form';



class WrappingPage extends Component {
    // state = {  }
    render() {
        return (
            <>
                <Switch>
                    <Route path='/offer/:id' component={OfferPage} />
                    <Route path='/offer' component={OfferList} />
                    <Route path='/partnerZone' component={PartnerZone} />
                    <Route path='/orders' component={Basket} />
                    <Route path='/auth' component={Auth} />
                    {/* <Route path='/form' component={Form} /> */}
                    <Route path='/' component={Home} />
                </Switch>

            </>
        );
    }
}

export default WrappingPage;