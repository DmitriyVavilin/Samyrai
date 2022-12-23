import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {StoreType} from "./components/redux/state";

export const renderEnterTree = (store:StoreType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
            <App
                dialogsPage={store._state.dialogsPage}
                profilePage={store._state.profilePage}
                addPost={store.addPost}
                updatePostText={store.updatePostText}

            />
        </BrowserRouter>
    );
}

