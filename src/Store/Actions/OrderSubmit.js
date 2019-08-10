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


export const orderFormSubmit = (orderData, token) => {
    return dispatch => {
        dispatch(orderSubmitStart());
        axios.post('https://okay-school.firebaseio.com/orders.json?auth=' + token, orderData)
            .then(res => {
                dispatch(orderSubmitSuccess(res.data.name, orderData));
            })
            .catch(err => {
                dispatch(orderSubmitFail(err))
            })
    };
};
