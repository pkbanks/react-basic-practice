import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App notification={ {message: "", type: "error"} } />, document.getElementById('root'));
registerServiceWorker();
