import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BodyPage ,App_header} from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App_header />, document.getElementById('root_header'));
ReactDOM.render(<BodyPage />, document.getElementById('root'));
//ReactDOM.render(<FooterPage />, document.getElementById('root_footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
