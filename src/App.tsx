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
import {ObjectDialogs, ObjectPost, StatePropsType} from "./components/redux/state";

type AppPropsType = {
    dialogsPage: ObjectDialogs
    profilePage:  ObjectPost
    addPost: (postMessage: string) => void
}

function App(props: AppPropsType) {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar dialogs={props.dialogsPage.dialogs}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={()=> <Dialogs dialogs={props.dialogsPage.dialogs} messages={props.dialogsPage.messages}/>}/>
                    <Route path={'/profile'} render={()=> <Profile myPostData={props.profilePage.myPostData} addPost={props.addPost} />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
    );
}


export default App;
