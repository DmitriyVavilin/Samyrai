import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from './components/redux/redux-store'
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const renderEnterTree = () => {
    root.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App store={store}/>
            </StoreContext.Provider>
        </BrowserRouter>
    );
}

renderEnterTree()
store.subscribe(renderEnterTree)

