import React from 'react';
import ReactDOM from 'react-dom';
import Api from './api/api';
import { ApiProvider } from './api/api-injection';
import App from './App';
import './index.css';

const api = new Api();

ReactDOM.render(
    <ApiProvider value={api}>
        <App />
    </ApiProvider>,
    document.getElementById('root')
);
