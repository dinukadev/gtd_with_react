import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gtd from './containers/Gtd';
import * as serviceWorker from './serviceWorker';
import TaskReducer from './store/reducers/TaskReducer';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(TaskReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><Gtd /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
