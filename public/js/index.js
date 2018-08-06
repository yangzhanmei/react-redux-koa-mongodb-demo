import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from './containers/App';
import test from '../js/middlewares/getTest';
import reducer from "./reducers/index";

const createStoreWithMiddleware = applyMiddleware(test)(createStore);
const store = createStoreWithMiddleware(reducer);

render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App} />
    </Router>
</Provider>,
    document.getElementById('app')
);