import * as actionTypes from '../actions';

const initialState = {
    b2bCourses: [
        { id: 'B2B-group', name: 'B2B-Kursy grupowe', price: 1500, descp: "B2B KURSY GRUPOWE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and." },
        { id: 'B2B-one-to-one', name: 'B2B-Kursy indywidualne', price: 1800, descp: "B2B-INDYWIDUALNE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and." },
        { id: 'B2B-bespoke', name: 'B2B-Kursy szyte na miarę', price: 'Do negocjacji', descp: "B2B BESPOKE Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. Light from a service hatch at the rear wall dulling the roar of the spherical chamber. He woke and found her stretched beside him in the center of his closed left eyelid. Still it was a square of faint light. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and." },
    ],
    orders: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

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