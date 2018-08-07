import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss'; // eslint-disable-line
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
