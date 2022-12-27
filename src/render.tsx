import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./components/redux/state";

    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );

    export const renderEnterTree = () => {
    root.render(
        <BrowserRouter>
            <App
                store={store}
                state={store.getState()}
                dialogsPage={store._state.dialogsPage}
                profilePage={store._state.profilePage}
                addPost={store.addPost.bind(store)}
                updatePostText={store.updatePostText.bind(store)}
            />
        </BrowserRouter>
    );
}

renderEnterTree()
store.subscriber(renderEnterTree)

