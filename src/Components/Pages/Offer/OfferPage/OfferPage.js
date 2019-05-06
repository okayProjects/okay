import React from 'react';
import SingleOffer from '../SingleOffer/SingleOffer';
import NavWrapper from '../../../Navigation/NavWrapper/NavWrapper';

const OfferPage = (props) => {

    return (
        <>
            <NavWrapper />
            <SingleOffer id={props.match.params.id} />
        </>
    );
}

export default OfferPage;