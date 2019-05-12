import React, { Component } from 'react';
import SingleCourseItem from '../SingleCourseItems/SingleCourseItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/actions';

import pic1 from '../../../images/new/up.jpg';
import pic2 from '../../../images/new/tongue.jpg';
import pic3 from '../../../images/new/man.jpg';
import pic4 from '../../../images/new/business.jpg';
import pic5 from '../../../images/new/flag.jpg';


const pics = [pic1, pic2, pic3, pic4, pic5];


class AbroadCourses extends Component {

    render() {

        const section = this.props.abroadCourses.map((course, index) =>

            <SingleCourseItem key={course.id + index} sectionName={course.id}
                id={course.id}
                courseDescription={course.descp}
                price={course.price}
                src={pics[index]}
                alt={'pic' + index}
                addToBasket={(id, price) => this.props.onToggleCourseBasket(id, price)} />
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
        abroadCourses: state.AbroadReducer.abroadCourses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleCourseBasket: (id, price) => dispatch({ type: actionTypes.ADD_COURSE_TO_BASKET, id: id, price })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AbroadCourses);