import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import { createStore } from 'redux'
import { reducerMethod } from './ReduxFiles/Reducer'

export const store=createStore(reducerMethod);
//store nesnesi oluşturuluyor
//redux da uygulama çapında tek bir state vardır. Store da bu state değeri tutulur
//store un içinde de reducer metotu vardır

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));
//Provider, App e store u inject ediyor.

serviceWorker.unregister();
