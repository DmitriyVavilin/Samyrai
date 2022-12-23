import React from "react";
import {addPost, state, updatePostText} from "./components/redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const renderEnterTree = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
            <App
                dialogsPage={state.dialogsPage}
                profilePage={state.profilePage}
                addPost={addPost}
                updatePostText={updatePostText}
            />
        </BrowserRouter>
    );
}

