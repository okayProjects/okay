import React from 'react';
import NavWrapper from '../../Navigation/NavWrapper/NavWrapper';
import Banner from '../../Banner/Banner';
import './PartnerZone.css';

const PartnerZone = (props) => {
    return (
        <>
            <NavWrapper />
            <div className='partner-zone-wrapper'>
                <Banner />
                <div className='p-wrapper'><p>UNDER CONSTRUCTION</p></div>
            </div>

        </>
    );
}

export default PartnerZone;