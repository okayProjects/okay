import * as actionTypes from '../Actions/actions';

const initialState = {
    modalActive: false,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.POP_UP_MODAL_ACTIVATED:
            return {
                ...state,
                modalActive: state.modalActive = true
            }
        case actionTypes.POP_UP_MODAL_DISACTIVATED:
            return {
                ...state,
                modalActive: state.modalActive = false
            }
        default: return state;
    };
};

export default reducer;