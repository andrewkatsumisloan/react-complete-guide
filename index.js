import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// gets access to root in the index.html file, displays <App /> in the div with the root id
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
