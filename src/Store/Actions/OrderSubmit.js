import * as actionTypes from './actions';
import axios from 'axios';

export const orderSubmitStart = () => {
    return {
        type: actionTypes.OREDR_SUBMIT_START
    };
};

export const orderSubmitSuccess = (orderId, orderData) => {
    return {
        type: actionTypes.OREDR_SUBMIT_SUCCESS,
        orderId,
        orderData
    };
};

export const orderSubmitFail = (err) => {
    return {
        type: actionTypes.OREDR_SUBMIT_FAIL,
        err
    };
};


export const orderFormSubmit = (orderData) => {
    return dispatch => {
        dispatch(orderSubmitStart());
        console.log(orderData);
        axios.post('https://okay-school.firebaseio.com/orders.json', orderData)
            .then(res => {
                console.log(res.data);
                dispatch(orderSubmitSuccess(res.data, orderData));
            })
            .catch(err => {
                console.log(err);
                dispatch(orderSubmitFail(err))
            })
    };
};