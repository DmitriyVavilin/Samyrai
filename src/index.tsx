import React from 'react';
import './index.css';
import {addPost, state, StatePropsType, updatePostText} from "./components/redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const renderEnterTree = (state:StatePropsType) => {
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

renderEnterTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
