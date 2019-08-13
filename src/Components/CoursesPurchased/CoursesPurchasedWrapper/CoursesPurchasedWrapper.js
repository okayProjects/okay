import React, { Component } from 'react';
import './CoursesPurchasedWrapper.css';
import { connect } from 'react-redux';
import SingleClientData from '../SingleCoursePurchased/SingleClientData';
import * as actions from '../../../Store/Actions/actionsIndex';
import Logo from '../../UI/Logo/Logo';
import Spinner from '../../UI/Spinner/Spinner';

class CoursesPurchased extends Component {

    componentDidMount() {
        this.props.onFetchSubmittedOrders(this.props.token, this.props.userId);
    };

    render() {

        let coursesPurchased = this.props.coursesPurchased.map((item, index) => (
            <div className='purchased-course-wrapper'
                key={item.client.userPersonalData.userName + index}>
                <SingleClientData
                    studentPeronalData={item.client.userPersonalData}
                    unavailableDays={item.client.unavailableDays}
                    unavailableHoursFrom={item.client.unavailableHoursFrom}
                    unavailableHoursTo={item.client.unavailableHoursTo}
                    dateOfPurchasing={item.dateOfPurchasing}
                    timeOfPurchasing={item.timeOfPurchasing}
                    courses={item.order}
                />
            </div>
        ));

        if (this.props.coursesPurchased.length === 0) {
            coursesPurchased = (
                <div className='empty-purchasedcourses-message-wrapper'>
                    <div className='basket-empty-message'>
                        <div className='logo-empty-basket-message' ><Logo /></div>
                        <h3>Nic jeszcze nie zamówiełeś</h3>
                        <h5>Wybierz swój kurs</h5>
                    </div>
                </div>
            );
        } if (this.props.loading) {
            coursesPurchased = <Spinner />
        }

        return (
            <div className='courses-purchased-wrapper'>
                {coursesPurchased}
            </div>
        );
    };
};



const mapStateToProps = state => {
    return {
        coursesPurchased: state.OrderSubmitReducer.orders,
        loading: state.OrderSubmitReducer.loading,
        token: state.AuthReducer.token,
        userId: state.AuthReducer.userId,
        // email: state.AuthReducer.email
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSubmittedOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPurchased);