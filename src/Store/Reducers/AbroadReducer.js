import * as actionTypes from '../actions';

const initialState = {
    abroadCourses: [
        { id: '1-Abroad-group', name: 'Abroad-Kurs nr 1', price: 1500, toggleToBasket: false },
        { id: '2-Abroad-one-to-one', name: 'Abroad-Kurs nr 2', price: 1800, toggleToBasket: false },
        { id: '3-Abroad-bespoke', name: 'Abroad-Kurs nr 3', price: 3500, toggleToBasket: false },
        { id: '4-Abroad-jaki-taki', name: 'Abroad-Kurs nr 4', price: 4000, toggleToBasket: false },
    ],
    orders: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.ADD_COURSE_TO_BASKET:
            return {
                ...state,
                orders: state.orders.concat(state.abroadCourses.filter(course => course.id === action.id))
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