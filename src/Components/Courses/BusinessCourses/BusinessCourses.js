import React, { Component } from 'react';
import SingleCourseItem from '../SingleCourseItems/SingleCourseItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/actions';


class BusinessCourses extends Component {

    render() {

        const section = this.props.b2bCourses.map(course =>
            <section key={course.id}>
                <SingleCourseItem sectionName={course.name}
                    id={course.id}
                    courseDescription={course.id}
                    price={course.price}
                    addToBasket={(id) => this.props.onToggleCourseBasket(id)} />
            </section>
        )
        return (
            <>
                {section}
            </>
        );
    }
}


const mapStateToProps = state => {

    return {
        b2bCourses: state.B2BReducer.b2bCourses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleCourseBasket: (id) => dispatch({ type: actionTypes.ADD_COURSE_TO_BASKET, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessCourses);