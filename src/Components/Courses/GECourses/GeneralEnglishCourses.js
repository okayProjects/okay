import React, { Component } from 'react';
import SingleCourseItem from '../SingleCourseItems/SingleCourseItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/actions';
import './GeneralEnglishCourses.css';
import pic1 from '../../../images/gecourses/boy-girl.jpg'
import pic2 from '../../../images/gecourses/up.jpg';
import pic3 from '../../../images/gecourses/man.jpg';
import pic4 from '../../../images/gecourses/tongue.jpg';
import pic5 from '../../../images/gecourses/flag.jpg';

const pics = [pic1, pic2, pic3, pic4, pic5];
const generalEnglishCourses = [
    {
        id: 'individual',
        name: 'Kursy grupowe',
        price: 1500,
        descp: "INDIVIDUAL-KURSY GRUPOWE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade."
    },
    {
        id: 'one-to-one',
        name: 'Kursy indywidualne',
        price: 1800,
        descp: "ONE TO ONE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s."
    },
    {
        id: 'matura',
        name: 'Egzamin maturalny',
        price: 1500,
        descp: "MATURA BZDURA Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and the amplified breathing of the."
    },
    {
        id: 'primary-exam',
        name: 'Egzamin ósmoklasisty',
        price: 1500,
        descp: "EGZAMIN ÓSMOKLASISTY Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and the amplified."
    },
    {
        id: 'emergency-lesson',
        name: 'Pogotowie korepetycyjne',
        price: 70,
        descp: "EMERGENCY LESSONS Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and."
    }
]


class GeneralEnglishCourses extends Component {



    render() {

        for (let key in generalEnglishCourses) {
            generalEnglishCourses[key].src = pics[key]
        }

        const section = generalEnglishCourses.map((course, index) =>

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
        onToggleCourseBasket: (course) => dispatch({ type: actionTypes.ADD_GECOURSE_TO_BASKET, course })
    }
}

export default connect(null, mapDispatchToProps)(GeneralEnglishCourses);