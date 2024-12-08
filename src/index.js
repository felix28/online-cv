import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {getJsonConfig} from './utils/utilities';

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style.css';
import './static/css/scroll_to_top_button.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Load app if json configuration file is available.
const promise = getJsonConfig();
promise.then(config => {
    root.render(
        <App config ={config}/>
    );
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
