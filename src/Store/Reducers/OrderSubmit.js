import * as actionTypes from '../Actions/actions';

const initialState = {
    orders: [],
    submitting: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OREDR_SUBMIT_START:
            return {
                ...state,
                submitting: true,
                error: null
            }
        case actionTypes.OREDR_SUBMIT_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                submitting: false,
                error: null,
                orders: state.orders.concat(newOrder)
            }
        case actionTypes.OREDR_SUBMIT_FAIL:
            return {
                ...state,
                submitting: false,
                error: action.error
            }
        default: return state;
    }
}

export default reducer;