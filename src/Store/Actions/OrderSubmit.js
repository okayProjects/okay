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





// export const ordersFetchStart = () => {
//     return {
//         type: actionTypes.ORDERS_FETCH_START
//     };
// };

// export const ordersFetchSuccess = (orders) => {
//     return {
//         type: actionTypes.ORDERS_FETCH_SUCCESS,
//         orders
//     };
// };

// export const ordersFetchFail = (err) => {
//     return {
//         type: actionTypes.ORDERS_FETCH_FAIL,
//         err
//     };
// };


// export const fetchOrders = () => {
//     return dispatch => {
//         dispatch(ordersFetchStart());
//         axios.get('https://okay-school.firebaseio.com/orders.json')
//             .then(res => {
//                 console.log(res.data);
//                 dispatch(ordersFetchSuccess(res.data))
//             })
//             .catch(err => {
//                 console.log(err);
//                 dispatch(ordersFetchFail(err))
//             })
//     };
// };