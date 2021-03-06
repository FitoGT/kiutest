import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Placeholder from './components/Placeholder';
import Popup from './components/Popup';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Placeholder />, document.getElementById('root'));
ReactDOM.render(<Popup />, document.getElementById('modal'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
