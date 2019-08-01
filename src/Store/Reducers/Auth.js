import * as actionTypes from '../Actions/actions';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.idToken,
                userId: action.localId,
                error: null
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: return state;

    }
}

export default reducer;