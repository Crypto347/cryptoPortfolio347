/**
* Libraries
*/

import React from 'react';
import ReactDOM from 'react-dom';

import {
    Provider
} from 'react-redux';

import {
    history
} from './store/store';

import {
    ConnectedRouter,
} from 'connected-react-router';

import store from './store/store';
import axios from 'axios';
 
/**
 * Components
 */

import App from './app';

// axios.interceptors.request.use(request => {
//     // req.headers.Authroization = "Bearer jjjjj"
//     console.log(request);
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// })

// axios.interceptors.response.use(response => {
//     // req.headers.Authroization = "Bearer jjjjj"
//     console.log(response);
//     return response;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// })

ReactDOM.render(
    <Provider store={store}>
       <ConnectedRouter history={history}>
         <App/>
       </ConnectedRouter>
    </Provider>,
   document.getElementById('app')
);



