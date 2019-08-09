import * as actionTypes from '../Actions/actions';

const initialState = {
    token: null,
    userId: null,
    email: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null,
                email: null
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.idToken,
                userId: action.localId,
                email: action.email,
                error: null
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
                email: null
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                email: null
            }
        default: return state;

    }
}

export default reducer;