import React from 'react';
import SingleOffer from '../SingleOffer/SingleOffer';

const OfferPage = (props) => {

    return (
        <>
            <div>OFFER PAGE</div>
            <SingleOffer id={props.match.params.id} />
        </>
    );
}

export default OfferPage;