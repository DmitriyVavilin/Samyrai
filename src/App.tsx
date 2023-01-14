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
import {ActionTypeDispatch, StoreType} from "./components/redux/store";

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionTypeDispatch)=>void
}

const App: React.FC<AppPropsType>  =  (props) => {
    const state = props.store.getState()

    return (
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar dialogs={props.store._state.dialogsPage.dialogs}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={()=> <Dialogs
                        store={props.store}
                        dialogs={props.store._state.dialogsPage.dialogs}
                        messages={props.store._state.dialogsPage.messages}
                        newMessageBody={props.store._state.dialogsPage.newMessageBody}

                    />}
                    />
                    <Route path={'/profile'} render={()=> <Profile profilePage={state.profilePage.posts}
                                                                   store={props.store}
                                                                   newPostText={state.profilePage.newPostText}
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
