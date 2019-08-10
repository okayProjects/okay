import * as actionTypes from './actions';
import axios from 'axios';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, localId, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken,
        localId,
        email
    };
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('localId');
    localStorage.removeItem('email');
    return {
        type: actionTypes.LOGOUT
    };
};

export const automaticallyLogout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiresIn * 1000);
    };
};

export const auth = (email, password, submitName) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password,
            returnSecureToken: true
        }
        let url = null;
        if (submitName === 'signUp') {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDqXRGtk89y42bnG1oXz7jqGB149y3oye4';
        } else if (submitName === 'signIn') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqXRGtk89y42bnG1oXz7jqGB149y3oye4';
        }
        axios.post(url, authData)
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('localId', response.data.localId);
                localStorage.setItem('email', response.data.email);
                dispatch(authSuccess(response.data.idToken, response.data.localId, response.data.email));
                dispatch(automaticallyLogout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFailed(err.response.data.error));
            });
    };
};


export const checkAuthStatus = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const localId = localStorage.getItem('localId');
                const email = localStorage.getItem('email');
                dispatch(authSuccess(token, localId, email));
                dispatch(automaticallyLogout((expirationDate.getTime() - new Date().getTime()) / 1000
                ));
            };
        };
    };
};