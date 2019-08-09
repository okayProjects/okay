import * as actionTypes from './actions';
import axios from 'axios';


export const ordersFetchStart = () => {
    return {
        type: actionTypes.ORDERS_FETCH_START
    };
};

export const ordersFetchSuccess = (orders) => {
    return {
        type: actionTypes.ORDERS_FETCH_SUCCESS,
        orders
    };
};

export const ordersFetchFail = (err) => {
    return {
        type: actionTypes.ORDERS_FETCH_FAIL,
        err
    };
};


export const fetchOrders = (token) => {
    return dispatch => {
        dispatch(ordersFetchStart());
        axios.get('https://okay-school.firebaseio.com/orders.json?auth=' + token)
            .then(res => {
                const orders = [];
                for (let key in res.data) {
                    orders.push({
                        ...res.data[key],
                        id: key
                    });
                };
                dispatch(ordersFetchSuccess(orders))
            })
            .catch(err => {
                dispatch(ordersFetchFail(err))
            })
    };
};