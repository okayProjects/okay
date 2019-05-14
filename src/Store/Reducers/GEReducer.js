import * as actionTypes from '../actions';

const initialState = {
    orders: [],
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.ADD_GECOURSE_TO_BASKET:
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
        default: return state;
    }

}

export default reducer;