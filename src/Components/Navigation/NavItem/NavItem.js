import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

const NavItem = (props) => {
    return (
        <li>
            <NavLink
                to={props.path}
                exact={props.exact ? props.exact : false}>
                {props.navItemName}
            </NavLink>
        </li>
    );
}

export default NavItem;