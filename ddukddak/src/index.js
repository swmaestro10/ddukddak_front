import React from 'react';
import ReactDom from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDom.render(
    <Provider store = {createStoreWithMiddleware(reducers)}><App /></Provider>,
    document.querySelector('.root')
);