import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore , combineReducers , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const currentOrder = (state = [], action) => {
    if (action.type === 'ADD_ITEM') {
        return [...state, action.payload];
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        currentOrder
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
