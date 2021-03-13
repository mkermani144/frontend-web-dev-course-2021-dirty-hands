import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';

//just for development
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
