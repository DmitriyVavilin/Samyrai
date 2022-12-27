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
import {StateDialogsType, StatePostType, StatePropsType, StoreType} from "./components/redux/state";

type AppPropsType = {
    store: StoreType
    dialogsPage: StateDialogsType
    profilePage:  StatePostType
    addPost: () => void
    updatePostText:(newText: string)=>void
    state: StatePropsType
}

function App(props: AppPropsType) {
    const state = props.store.getState()

    return (
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar dialogs={props.dialogsPage.dialogs}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={()=> <Dialogs dialogs={props.store._state.dialogsPage.dialogs} messages={props.store._state.dialogsPage.messages}/>}/>
                    <Route path={'/profile'} render={()=> <Profile profilePage={props.store._state.profilePage.posts} store={props.store}
                                                                   updatePostText={props.store.updatePostText}
                                                                   newPostText={props.store._state.profilePage.newPostText} addPost={props.store.addPost} />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
    );
}
export default App;
