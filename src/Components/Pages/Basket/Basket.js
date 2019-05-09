import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/actions';

class Basket extends Component {

    render() {

        const courses = this.props.generalEnglishCourses.map(course => {

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
                <h1>I am BASKET</h1>
                {courses}
            </>

        );
    }
}

const mapStateToProps = state => {

    return {
        generalEnglishCourses: state.GEReducer.orders.concat(state.B2BReducer.orders)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleCourseBasket: (id) => dispatch({ type: actionTypes.REMOVE_COURSE_FROM_BASKET, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);