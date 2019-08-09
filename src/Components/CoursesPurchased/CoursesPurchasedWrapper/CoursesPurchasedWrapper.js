import React, { Component } from 'react';
import './CoursesPurchasedWrapper.css';
import { connect } from 'react-redux';
import SingleClientData from '../SingleCoursePurchased/SingleClientData';
import * as actions from '../../../Store/Actions/actionsIndex';


class CoursesPurchased extends Component {

    componentDidMount() {
        this.props.onFetchSubmittedOrders(this.props.token);

    };

    render() {

        const coursesPurchased = this.props.coursesPurchased.map((item, index) => (
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

        return (
            coursesPurchased
        );
    };
};



const mapStateToProps = state => {
    return {
        coursesPurchased: state.OrderSubmitReducer.orders,
        loading: state.OrderSubmitReducer.loading,
        token: state.AuthReducer.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSubmittedOrders: (token) => dispatch(actions.fetchOrders(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPurchased);