import React, { Component } from 'react';
import SingleCourseItem from '../SingleCourseItems/SingleCourseItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/actions';

import pic1 from '../../../images/abroadcourses/ge1.jpg';
import pic2 from '../../../images/abroadcourses/uk1.jpg';
import pic3 from '../../../images/abroadcourses/abroad.jpg';
import pic4 from '../../../images/abroadcourses/tube.jpg';


const pics = [pic1, pic2, pic3, pic4];

const abroadCourses = [
    { id: 'Abroad-group', name: 'Abroad-Kurs nr 1', price: 1500, descp: "ABROAD-INDYWIDUALNE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and." },
    { id: 'Abroad-one-to-one', name: 'Abroad-Kurs nr 2', price: 1800, descp: "ABROAD-INDYWIDUALNE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and." },
    { id: 'Abroad-bespoke', name: 'Abroad-Kurs nr 3', price: 3500, descp: "ABROAD-INDYWIDUALNE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and." },
    { id: 'Abroad-jaki-taki', name: 'Abroad-Kurs nr 4', price: 4000, descp: "ABROAD-INDYWIDUALNE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and." },
]


class AbroadCourses extends Component {

    render() {

        for (let key in abroadCourses) {
            abroadCourses[key].src = pics[key]
        }

        const section = abroadCourses.map((course, index) =>

            <SingleCourseItem key={course.id + index} sectionName={course.id}
                id={course.id}
                courseDescription={course.descp}
                price={course.price}
                src={course.src}
                course={course}
                alt={'pic' + index}
                addToBasket={course => this.props.onToggleCourseBasket(course)} />
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
        onToggleCourseBasket: (course) => dispatch({ type: actionTypes.ADD_ABROADCOURSE_TO_BASKET, course })
    }
}

export default connect(null, mapDispatchToProps)(AbroadCourses);