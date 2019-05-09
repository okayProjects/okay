import React, { Component } from 'react';
import SingleCourseItem from '../SingleCourseItems/SingleCourseItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/actions';


class GeneralEnglishCourses extends Component {

    render() {

        const section = this.props.generalEnglishCourses.map(course =>
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
        generalEnglishCourses: state.GEReducer.generalEnglishCourses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleCourseBasket: (id) => dispatch({ type: actionTypes.ADD_COURSE_TO_BASKET, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralEnglishCourses);