import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/actions';
import Form from '../../Form/Form';
import Button from '../../UI/Buttons/Button';
import Navigation from '../../Navigation/NavWrapper/NavWrapper';
import './Basket.css';

class Basket extends Component {

    render() {
        const allPrices = [0];
        this.props.orderedCourses.forEach(course => allPrices.push(course.price))

        const totalPrice = allPrices.reduce((arr, ell) => {
            return arr + ell;
        });

        const courses = this.props.orderedCourses.map(course => {
            return (
                <div key={course.id} className='basket'>
                    <h1>Zamawiasz {course.name}</h1>
                    <span>{`Cena tego kursu to ${course.price} PLN`}</span>
                    <Button click={() => this.props.onRemoveCourseFromBasket(course.id)} btnType='offer-info-button'>Usuń</Button>
                </div>
            )
        });

        return (
            <div className='basket-wrapper'>
                <Navigation />
                {courses}
                {this.props.orderedCourses.length > 0 && <h2>{`Wrtość całkowita wszystkich zamówionych kursów to ${totalPrice}PLN`}</h2>}
                {this.props.orderedCourses.length <= 0 ? <h1>Twój koszyk jest pusty</h1> :
                    <Form />}
            </div>

        );
    }
}

const mapStateToProps = state => {

    return {
        orderedCourses: state.GEReducer.orders.concat(state.B2BReducer.orders, state.AbroadReducer.orders)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCourseFromBasket: (id) => dispatch({ type: actionTypes.REMOVE_COURSE_FROM_BASKET, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);