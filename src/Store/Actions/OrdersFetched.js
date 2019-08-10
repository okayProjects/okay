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


export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(ordersFetchStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('https://okay-school.firebaseio.com/orders.json' + queryParams)
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