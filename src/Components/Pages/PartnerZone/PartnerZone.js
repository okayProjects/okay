import React from 'react';
import NavWrapper from '../../Navigation/NavWrapper/NavWrapper';
import Auth from '../../Auth/Auth';
import './PartnerZone.css';

const PartnerZone = (props) => {
    return (
        <>
            <NavWrapper />
            <div className='partner-zone-wrapper'>
                <Auth />
                {/* <div className='p-wrapper'><p>UNDER CONSTRUCTION</p></div> */}
            </div>

        </>
    );
}

export default PartnerZone;