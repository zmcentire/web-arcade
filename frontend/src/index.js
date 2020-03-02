import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {BrowserRouter} from 'react-router-dom';
import ScoreProvider from './provider/scoreProvider'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import 'mdbreact/dist/css/style.css'

ReactDOM.render(
    <BrowserRouter>
        <ScoreProvider>
           <App />  
        </ScoreProvider> 
    </BrowserRouter>
, document.getElementById('root'));