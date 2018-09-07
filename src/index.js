import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore , combineReducers , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// HomeReducer: track order add and remove
const pizzas = (state = [], action) => {
    if(action.type === 'ADD_ORDER') {
        return [...state, action.payload];
    } else if (action.type === 'DELETE_ONE') {
        return state.filter((pizza, i) => pizza.idNumber !== action.payload);
    } else {
        return state;
    }
}


//CustomerReducer

//CheckoutReducer

//AdminReducer




const storeInstance = createStore(
    combineReducers({
// reducers goes here
        
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
