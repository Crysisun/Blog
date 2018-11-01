import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Hello extends Component {
    render() {
        return <div>hello</div>
    }
}
class Goodbye extends Component {
    render() {
        return <div>goodbye</div>
    }
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        {/*<App />*/}
        <BrowserRouter>
            <Route path="/hello" component={Hello} />

            <Route path="/goodbye" component={Goodbye} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));