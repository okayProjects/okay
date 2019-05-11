import * as actionTypes from '../actions';

const initialState = {
    generalEnglishCourses: [
        {
            id: 'individual',
            name: 'Kursy grupowe',
            price: 1500,
            descp: "INDIVIDUAL-KURSY GRUPOWE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade."
        },
        {
            id: 'one-to-one',
            name: 'Kursy indywidualne',
            price: 1800,
            descp: "ONE TO ONE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s."
        },
        {
            id: 'matura',
            name: 'Egzamin maturalny',
            price: 1500,
            descp: "MATURA BZDURA Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and the amplified breathing of the."
        },
        {
            id: 'primary-exam',
            name: 'Egzamin ósmoklasisty',
            price: 1500,
            descp: "EGZAMIN ÓSMOKLASISTY Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and the amplified."
        },
        {
            id: 'emergency-lesson',
            name: 'Pogotowie korepetycyjne',
            price: 70,
            descp: "EMERGENCY LESSONS Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and."
        }
    ],
    orders: [],
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
                orders: state.orders.concat(state.generalEnglishCourses.filter(course => course.id === action.id)),
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