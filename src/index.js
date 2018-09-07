import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore , combineReducers , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const currentOrder = (state = {}, action) => {
    if (action.type === 'ADD_ITEM') {
        return action.payload;
    }
    return state;
}
const pizzas = (state = [], action) => {
    if(action.type === 'ADD_ORDER') {
        return action.payload;
    } else if (action.type === 'DELETE_ONE') {
        return state.filter((pizza, i) => pizza.idNumber !== action.payload);
    } else {
        return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        currentOrder,
        pizzas,
        

    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
