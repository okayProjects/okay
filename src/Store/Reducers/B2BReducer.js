import * as actionTypes from '../actions';

const initialState = {
    b2bCourses: [
        { id: '1-B2B-individual', name: 'B2B-Kursy grupowe', price: 1500, toggleToBasket: false },
        { id: '2-one-to-one', name: 'B2B-Kursy indywidualne', price: 1800, toggleToBasket: false },
        { id: '3-bespoke', name: 'Kursy szyte na miarę', price: 'Do negocjacji', toggleToBasket: false },
    ],
    orders: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        // case actionTypes.COURSE_TOGGLE_TO_BASKET:

        //     return {
        //         ...state,
        //         ...state.generalEnglishCourses.map(course => {
        //             if (course.id !== action.id) {
        //                 return course
        //             } return {
        //                 course: {
        //                     ...course,
        //                     ...course.toggleToBasket = !course.toggleToBasket
        //                 }
        //             }
        //         })
        //     }
        case actionTypes.ADD_COURSE_TO_BASKET:
            return {
                ...state,
                orders: state.orders.concat(state.b2bCourses.filter(course => course.id === action.id))
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