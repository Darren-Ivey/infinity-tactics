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
                <Route path="/PanOceania" component={ App } />
                <Route path="/YuJing" component={ App } />
                <Route path="/Ariadna" component={ App } />
                <Route path="/Haqqislam" component={ App } />
                <Route path="/Nomads" component={ App } />
                <Route path="/CombinedArmy" component={ App } />
                <Route path="/Aleph" component={ App } />
                <Route path="/Tohaa" component={ App } />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
