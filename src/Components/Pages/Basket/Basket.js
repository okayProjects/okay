import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/actions';
import Form from '../../Form/Form';

class Basket extends Component {

    render() {

        const courses = this.props.orderedCourses.map(course => {

            return (
                <div key={course.id}>
                    <h1>Zamawiasz {course.name}</h1>
                    <span>Cena tego kursu to {course.price}</span>
                    <button onClick={() => this.props.onToggleCourseBasket(course.id)} >Anuluj</button>
                    <button>Wyślij</button>
                </div>
            )

        }

        )
        return (
            <>
                {courses}
                {this.props.orderedCourses.length <= 0 ? <h1>Twój koszyk jest pusty</h1> : <Form />}
            </>

        );
    }
}

const mapStateToProps = state => {
    console.log(state.GEReducer.totalPrice);
    return {
        orderedCourses: state.GEReducer.orders.concat(state.B2BReducer.orders, state.AbroadReducer.orders)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleCourseBasket: (id) => dispatch({ type: actionTypes.REMOVE_COURSE_FROM_BASKET, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);