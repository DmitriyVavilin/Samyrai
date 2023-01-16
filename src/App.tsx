import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionTypeDispatch} from "./components/redux/store";
import {RootStateType} from "./components/redux/redux-store";

type AppPropsType = {
    store: RootStateType
    dispatch: (action: ActionTypeDispatch) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar dialogs={state.dialogsPage.dialogs}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageBody={state.dialogsPage.newMessageBody}
                    dispatch={props.dispatch}

                />}
                />
                <Route path={'/profile'} render={() => <Profile
                    store={props.store}
                    dispatch={props.dispatch}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}
export default App;
