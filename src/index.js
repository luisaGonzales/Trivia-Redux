import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "redux-zero/react";
import store from "./Store";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Index = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
