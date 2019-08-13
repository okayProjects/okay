import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../UI/Logo/Logo';
import './NavWrapper.css';

import NavItem from '../NavItem/NavItem';

class NavWrapper extends Component {

    state = {
        burgerActive: false,
        menuVisible: false
    }

    burgerStyleHandler = (e) => {
        this.setState(prevState => {
            return {
                burgerActive: !prevState.burgerActive,
                menuVisible: !prevState.menuVisible
            };
        });
    };

    render() {
        const userEmail = this.props.loggedAs;
        let menuList = [
            { name: 'o mnie', path: '/about' },
            { name: 'kursy', path: '/offer' },
            { name: 'strefa partnera', path: '/partnerZone' },
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

        let burgerClasses = ['burger']
        if (this.state.burgerActive) {
            burgerClasses = ['burger', 'active']
        }
        let menuClasses = ['nav']
        if (this.state.burgerActive) {
            menuClasses = ['nav', 'visible']
        }

        return (
            <>
                <nav className={menuClasses.join(' ')}>
                    <div className='logo-burger'>
                        <Logo />
                    </div>
                    <div className={burgerClasses.join(' ')} onClick={() => this.burgerStyleHandler()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='nav-logo-wrapper'>
                        <Link to='/'><Logo /></Link>
                    </div>
                    <div className='nav-items-wrapper'>
                        <ul>
                            {menu}
                        </ul>
                        {this.props.totalOrderedCourses.length > 0 && itemsInBasket}
                    </div>
                </nav>
            </>
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