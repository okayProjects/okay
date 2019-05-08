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
                    addToBasket={(id) => this.props.onAddCourseToBasket(id)} />
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
        generalEnglishCourses: state.generalEnglishCourses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCourseToBasket: (id) => dispatch({ type: actionTypes.COURSE_ADDED_TO_BASKET, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralEnglishCourses);