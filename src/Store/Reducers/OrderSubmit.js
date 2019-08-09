import * as actionTypes from '../Actions/actions';

const initialState = {
    orders: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OREDR_SUBMIT_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.OREDR_SUBMIT_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            };
            return {
                ...state,
                loading: false,
                error: null,
                orders: state.orders.concat(newOrder)
            };
        case actionTypes.OREDR_SUBMIT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.ORDERS_FETCH_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.ORDERS_FETCH_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            };
        case actionTypes.ORDERS_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.err
            };
        default: return state;
    }
}

export default reducer;