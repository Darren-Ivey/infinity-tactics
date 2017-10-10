import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './store';

const storeInstance = Store();

render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
