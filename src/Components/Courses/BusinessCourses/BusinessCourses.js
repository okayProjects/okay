import React, { Component } from 'react';
import SingleCourseItem from '../SingleCourseItems/SingleCourseItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/actions';
import './Business.css';

import pic1 from '../../../images/businesscources/manwitflag.jpg';
import pic2 from '../../../images/businesscources/hands.jpg'
import pic3 from '../../../images/businesscources/puzzles.jpg';

const pics = [pic1, pic2, pic3];
const b2bCourses = [
    { id: 'B2B-group', name: 'B2B-Kursy grupowe', price: 1500, descp: "B2B KURSY GRUPOWE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and." },
    { id: 'B2B-one-to-one', name: 'B2B-Kursy indywidualne', price: 1800, descp: "B2B-INDYWIDUALNE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and." },
    { id: 'B2B-bespoke', name: 'B2B-Kursy szyte na miarę', price: 'Do negocjacji', descp: "B2B BESPOKE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and." },
]


class BusinessCourses extends Component {

    render() {

        for (let key in b2bCourses) {
            b2bCourses[key].src = pics[key]
        }

        const section = b2bCourses.map((course, index) =>

            <SingleCourseItem key={course.id + index} sectionName={course.id}
                id={course.id}
                courseDescription={course.descp}
                price={course.price}
                src={course.src}
                alt={'pic' + index}
                course={course}
                addToBasket={(course) => this.props.onToggleCourseBasket(course)} />
        )
        return (
            <>
                {section}
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleCourseBasket: (course) => dispatch({ type: actionTypes.ADD_B2BCOURSE_TO_BASKET, course })
    }
}

export default connect(null, mapDispatchToProps)(BusinessCourses);