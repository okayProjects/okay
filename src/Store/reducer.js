import * as actionTypes from './actions';

const initialState = {
    generalEnglishCourses: [
        { id: '1-groups', name: 'Kursy grupowe', price: 1500, addedToBasket: false },
        { id: '2-one-to-one', name: 'Kursy indywidualne', price: 1800, addedToBasket: false },
        { id: '3-matura', name: 'Egzamin maturalny', price: 1500, addedToBasket: false },
        { id: '4-primaryExam', name: 'Egzamin ósmoklasisty', price: 1500, addedToBasket: false },
        { id: '5-emergencyLesson', name: 'Pogotowie korepetycyjne', price: 70, addedToBasket: false }
    ]
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.COURSE_ADDED_TO_BASKET:

            return {
                ...state,
                ...state.generalEnglishCourses.map(course => {
                    if (course.id !== action.id) {
                        return course
                    } return {
                        course: {
                            ...course,
                            ...course.addedToBasket = !course.addedToBasket
                        }
                    }
                })

            }
        default: return state;
    }

}

export default reducer;