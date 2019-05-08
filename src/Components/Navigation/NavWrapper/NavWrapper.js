import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Logo/Logo';
import './NavWrapper.css';

import NavItem from '../NavItem/NavItem';

const menuList = [
    { name: 'nasze kursy', path: '/offer' },
    { name: 'strefa partnera', path: '/partnerZone' },
    { name: 'koszyk', path: '/orders' }
];

const NavWrapper = (props) => {

    const menu = menuList.map(item => (
        <NavItem key={item.name}
            path={item.path}
            navItemName={item.name}
            exact={item.exact} />
    ))

    return (
        <nav className='nav'>
            <ul>
                <Link to='/'><Logo /></Link>
                {menu}
            </ul>
        </nav>
    );
}

export default NavWrapper;