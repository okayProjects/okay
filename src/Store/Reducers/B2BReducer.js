import * as actionTypes from '../Actions/actions';

const initialState = {
    orders: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_B2BCOURSE_TO_BASKET:
            return {
                ...state,
                orders: state.orders.concat(action.course)
            }
        case actionTypes.REMOVE_COURSE_FROM_BASKET:
            const newOrders = state.orders.filter(order => order.id !== action.id)
            return {
                ...state,
                orders: newOrders

            }
        case actionTypes.CLEAR_BASKET_AFTER_FORM_SENT:
            return {
                ...state,
                orders: []
            }
        default: return state;
    }

}

export default reducer;