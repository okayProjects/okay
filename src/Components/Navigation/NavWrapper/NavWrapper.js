import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../UI/Logo/Logo';
import './NavWrapper.css';

import NavItem from '../NavItem/NavItem';

class NavWrapper extends Component {

    render() {
        const userEmail = this.props.loggedAs;
        let menuList = [
            { name: 'o mnie', path: '/about' },
            { name: 'kursy', path: '/offer' },
            { name: 'strefa partnera/logowanie', path: '/partnerZone' },
            { name: 'koszyk', path: '/basket' }
        ];

        if (this.props.userIsAuthenticated) {

            menuList = [
                { name: 'o mnie', path: '/about' },
                { name: 'kursy', path: '/offer' },
                { name: userEmail, path: '/partnerZone', className: 'user-email' },
                { name: 'wyloguj', path: '/logout' },
                { name: 'koszyk', path: '/basket' }
            ];
        };



        const menu = menuList.map(item => (
            <NavItem key={item.name}
                path={item.path}
                navItemName={item.name}
                exact={item.exact}
                className={item.className} />
        ));

        const itemsInBasket = <div className='items-in-basket'>
            <i className="fas fa-shopping-basket"></i>
            <span>{this.props.totalOrderedCourses.length}</span>
        </div>

        return (
            <nav className='nav'>
                <ul>
                    <Link to='/'><Logo /></Link>
                    {menu}
                    {this.props.totalOrderedCourses.length > 0 && itemsInBasket}
                </ul>
            </nav>
        );
    };
};

const mapStateToProps = state => {

    return {
        totalOrderedCourses: state.GEReducer.orders.concat(state.B2BReducer.orders, state.AbroadReducer.orders),
        userIsAuthenticated: state.AuthReducer.token !== null,
        loggedAs: state.AuthReducer.email
    };
};

export default connect(mapStateToProps)(NavWrapper);