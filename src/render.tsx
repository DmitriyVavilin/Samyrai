import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addDialog, addPost, state, updatePostText} from "./components/redux/state";
import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const renderEnterTree = () => {
    root.render(
        <BrowserRouter>
            <App
                dialogsPage={state.dialogsPage}
                profilePage={state.profilePage}
                addPost={addPost}
                updatePostText={updatePostText}
                addDialog={addDialog}
            />
        </BrowserRouter>
    );
}

renderEnterTree()