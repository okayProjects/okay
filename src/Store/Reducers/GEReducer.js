import * as actionTypes from '../actions';

const initialState = {
    generalEnglishCourses: [
        { id: '1-individual', name: 'Kursy grupowe', price: 1500, toggleToBasket: false },
        { id: '2-one-to-one', name: 'Kursy indywidualne', price: 1800, toggleToBasket: false },
        { id: '3-matura', name: 'Egzamin maturalny', price: 1500, toggleToBasket: false },
        { id: '4-primaryExam', name: 'Egzamin ósmoklasisty', price: 1500, toggleToBasket: false },
        { id: '5-emergencyLesson', name: 'Pogotowie korepetycyjne', price: 70, toggleToBasket: false }
    ],
    orders: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.COURSE_TOGGLE_TO_BASKET:

            return {
                ...state,
                ...state.generalEnglishCourses.map(course => {
                    if (course.id !== action.id) {
                        return course
                    } return {
                        course: {
                            ...course,
                            ...course.toggleToBasket = !course.toggleToBasket
                        }
                    }
                })
            }
        case actionTypes.ADD_COURSE_TO_BASKET:
            return {
                ...state,
                orders: state.orders.concat(state.generalEnglishCourses.filter(course => course.id === action.id))
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