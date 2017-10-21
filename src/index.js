import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Routing
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import rootReducer from './modules/index.js';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    rootReducer,
    applyMiddleware(middleware, logger)
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={ App } />
                <Route path="/1" component={ App } />
                <Route path="/2" component={ App } />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
