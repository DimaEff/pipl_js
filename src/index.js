import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { ThemeProvider } from '@material-ui/core/styles';

import './index.css'
import App from './App';
import store from "./Redux/store_redux";
import theme, {Global} from "./indexStyles";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = () => {ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Global />
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)};

rerenderEntireTree(store.getState())

store.subscribe(() => {
    rerenderEntireTree(store.getState())
    }
);