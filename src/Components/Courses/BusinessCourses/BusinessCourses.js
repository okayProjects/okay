import React, { Component } from 'react';
import SingleCourseItem from '../SingleCourseItems/SingleCourseItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/Actions/actions';
// import './Business.css';
import axios from 'axios';
import Footer from '../../UI/Footer/Footer';
import Spinner from '../../UI/Spinner/Spinner';
import pic1 from '../../../images/businesscources/hands.jpg';
import pic2 from '../../../images/businesscources/manwitflag.jpg';
import pic3 from '../../../images/businesscources/puzzles.jpg';
import pic4 from '../../../images/businesscources/businessAbroad.jpg';

const pics = [pic1, pic2, pic3, pic4];

class BusinessCourses extends Component {

    state = {
        b2bCourses: null
    };

    componentDidMount() {
        axios.get('https://okay-school.firebaseio.com/b2bCourses.json')
            .then(response => {
                const b2bCourses = [];
                for (let key in response.data) {
                    b2bCourses.push(response.data[key]);
                };
                b2bCourses.forEach((course, index) => {
                    course.src = pics[index]
                });
                this.setState({ b2bCourses });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {

        let section = <Spinner />
        if (this.state.b2bCourses) {
            section = this.state.b2bCourses.map((course, index) =>
                <SingleCourseItem key={course.id + index}
                    sectionName={course.name}
                    id={course.id}
                    courseDescription={course.descp}
                    courseAdvantages={course.advantages}
                    courseTarget={course.target}
                    courseTerms={course.terms}
                    price={course.price}
                    src={course.src}
                    alt={'pic' + index}
                    course={course}
                    addToBasket={(course) => this.props.onToggleCourseBasket(course)} />
            );
        };

        return (
            <>
                {section}
                <Footer />
            </>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleCourseBasket: (course) => dispatch({ type: actionTypes.ADD_B2BCOURSE_TO_BASKET, course })
    };
};

export default connect(null, mapDispatchToProps)(BusinessCourses);