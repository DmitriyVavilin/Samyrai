import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addDialog, addPost, state, StatePropsType, updatePostText} from "./components/redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const renderEnterTree = (state: StatePropsType) => {
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
