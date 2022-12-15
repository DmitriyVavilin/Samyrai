import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./components/redux/state";
import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const renderEnterTree = () => {
    root.render(
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>
    );
}

renderEnterTree()