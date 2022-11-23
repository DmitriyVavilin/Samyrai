import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, state, StatePropsType} from "./components/redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const renderEnterTree = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    dialogsPage={state.dialogsPage}
                    profilePage={state.profilePage}
                    addPost={addPost}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
