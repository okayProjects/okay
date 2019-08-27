import React, { Component } from 'react';
import SingleCourseItem from '../SingleCourseItems/SingleCourseItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/Actions/actions';
import './GeneralEnglishCourses.css';
import axios from 'axios';
import Footer from '../../UI/Footer/Footer';
import Spinner from '../../UI/Spinner/Spinner';
import pic1 from '../../../images/gecourses/up.jpg';
import pic2 from '../../../images/gecourses/boy-girl.jpg';
import pic3 from '../../../images/gecourses/man.jpg';
import pic4 from '../../../images/gecourses/tongue.jpg';
import pic5 from '../../../images/gecourses/flag.jpg';

const pics = [pic1, pic2, pic3, pic4, pic5];

class GeneralEnglishCourses extends Component {

    state = {
        generalEnglishCourses: null
    };

    componentDidMount() {
        axios.get('https://okay-school.firebaseio.com/generalEnglishCourses.json')
            .then(response => {
                const generalEnglishCourses = [];
                for (let key in response.data) {
                    generalEnglishCourses.push(response.data[key]);
                };
                generalEnglishCourses.forEach((course, index) => {
                    course.src = pics[index]
                });
                this.setState({ generalEnglishCourses });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {

        let section = <Spinner />
        if (this.state.generalEnglishCourses) {
            section = this.state.generalEnglishCourses.map((course, index) =>
                <SingleCourseItem key={course.id + index}
                    sectionName={course.name}
                    id={course.id}
                    courseDescription={course.descp}
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
        onToggleCourseBasket: (course) => dispatch({ type: actionTypes.ADD_GECOURSE_TO_BASKET, course })
    };
};

export default connect(null, mapDispatchToProps)(GeneralEnglishCourses);