import React, { Component } from 'react';
import SingleCourseItem from '../SingleCourseItems/SingleCourseItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/Actions/actions';
import Spinner from '../../UI/Spinner/Spinner';
import Footer from '../../UI/Footer/Footer';
import pic1 from '../../../images/abroadcourses/uk1.jpg';
import pic2 from '../../../images/abroadcourses/ge1.jpg';
import pic3 from '../../../images/abroadcourses/abroad.jpg';
import pic4 from '../../../images/abroadcourses/tube.jpg';
import axios from 'axios';


const pics = [pic1, pic2, pic3, pic4];

class AbroadCourses extends Component {

    state = {
        abroadCourses: null
    };

    componentDidMount() {
        axios.get('https://okay-school.firebaseio.com/abroadCourses.json')
            .then(response => {
                const abroadCourses = [];
                for (let key in response.data) {
                    abroadCourses.push(response.data[key]);
                };
                abroadCourses.forEach((course, index) => {
                    course.src = pics[index]
                });
                this.setState({ abroadCourses });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {

        let section = <Spinner />
        if (this.state.abroadCourses) {
            section = this.state.abroadCourses.map((course, index) =>
                <SingleCourseItem
                    key={course.id}
                    sectionName={course.name}
                    id={course.id}
                    courseDescription={course.descp}
                    price={course.price}
                    courseAdvantages={course.advantages}
                    courseTarget={course.target}
                    courseTerms={course.terms}
                    src={course.src}
                    course={course}
                    alt={'pic' + index}
                    addToBasket={course => this.props.onToggleCourseBasket(course)} />
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
        onToggleCourseBasket: (course) => dispatch({ type: actionTypes.ADD_ABROADCOURSE_TO_BASKET, course })
    };
};

export default connect(null, mapDispatchToProps)(AbroadCourses);