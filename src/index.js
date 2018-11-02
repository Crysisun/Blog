import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
import PostsIndex from './components/post_index';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        {/*<App />*/}
        <BrowserRouter>
            <div>
                <Route path="/" component={PostsIndex}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));