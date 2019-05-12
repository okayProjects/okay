import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../UI/Logo/Logo';
import './NavWrapper.css';

import NavItem from '../NavItem/NavItem';

const menuList = [
    { name: 'nasze kursy', path: '/offer' },
    { name: 'strefa partnera', path: '/partnerZone' },
    { name: 'koszyk', path: '/orders' }
];

class NavWrapper extends Component {

    render() {
        const menu = menuList.map(item => (
            <NavItem key={item.name}
                path={item.path}
                navItemName={item.name}
                exact={item.exact} />
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
    }


}

const mapStateToProps = state => {
    return {
        totalOrderedCourses: state.GEReducer.orders.concat(state.B2BReducer.orders, state.AbroadReducer.orders)
    }
}

export default connect(mapStateToProps)(NavWrapper);