import React from 'react';
import {createBrowserHistory} from 'history'
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import './index.css';
import * as serviceWorker from './serviceWorker';
import {ConnectedRouter} from 'connected-react-router'
import DynApp from "./containers/DynApp";
import mid from "./mid/callbackMiddleWare";

const history = createBrowserHistory();

const BASE_URL_RESSOURCES = "https://intense-cove-31113.herokuapp.com/";

const store = createStore(
    rootReducer(history),
    applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware.withExtraArgument(BASE_URL_RESSOURCES), // lets us dispatch() functions / actions in async
        mid,
        // createLogger() // logs actions TODO : remove in prod
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <DynApp/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
