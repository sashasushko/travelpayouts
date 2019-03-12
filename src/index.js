import React from 'react';
import ReactDOM from 'react-dom';
import Api from './api/api';
import { ApiProvider } from './api/api-injection';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const api = new Api();

ReactDOM.render(
    <ApiProvider value={api}>
        <App />
    </ApiProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
