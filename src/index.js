import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Teste from './pages/login_page'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Teste/>, document.getElementById('root'));

serviceWorker.unregister();
