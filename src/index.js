import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import GEReducer from './Store/Reducers/GEReducer';
import B2BReducer from './Store/Reducers/B2BReducer';
import AbroadReducer from './Store/Reducers/AbroadReducer';
import AuthReducer from './Store/Reducers/Auth';
import OrderSubmitReducer from './Store/Reducers/OrderSubmit';
import PopUpModalControllerReducer from './Store/Reducers/PopUpModalController';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const rootReducer = combineReducers({
    GEReducer,
    B2BReducer,
    AbroadReducer,
    OrderSubmitReducer,
    AuthReducer,
    PopUpModalControllerReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


const app = (<Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>
</Provider>)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
