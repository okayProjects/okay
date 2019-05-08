import React, { Component } from 'react';
import { connect } from 'react-redux';

class Basket extends Component {

    render() {

        const courses = this.props.courseAddedToBasket.map(course => {
            if (course.addedToBasket) {
                return (
                    <div key={course.id}>
                        <h1>Zamawiasz {course.name}</h1>
                        <span>Cena tego kursu to {course.price}</span>
                        <button>Anuluj</button>
                        <button>Wyślij</button>
                    </div>
                )
            } return null
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
        courseAddedToBasket: state.generalEnglishCourses
    }
}

export default connect(mapStateToProps)(Basket);