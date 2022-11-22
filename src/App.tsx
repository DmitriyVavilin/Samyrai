import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StatePropsType} from "./components/redux/state";


export type PostType ={
    id: number
    messages: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

function App(props:StatePropsType) {

    //  let dialogs: DialogsType[] = [
    //     {id: 1, name: 'Dimych'},
    //     {id: 2, name: 'Andrey'},
    //     {id: 3, name: 'Sveta'},
    //     {id: 4, name: 'Sasha'},
    //     {id: 5, name: 'Tatyana'}
    // ]
    //
    //  let messages: MessageType[] = [
    //     {id: 1, message: 'Hello!!!'},
    //     {id: 2, message: 'How are you?'},
    //     {id: 3, message: 'What do you do?'},
    //     {id: 4, message: 'I have a two dogs'},
    //     {id: 5, message: 'I`m want you)'}
    // ]
    //
    // let myPostData: PostType[] = [
    //     {id: 1, messages: 'Hi, how are you?', likesCount: 100},
    //     {id: 2, messages: 'It`s my first post', likesCount: 150},
    // ]

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={()=> <Dialogs dialogs={props.profileDialogs.dialogs} messages={props.profileDialogs.messages}/>}/>
                    <Route path={'/profile'} render={()=> <Profile myPostData={props.profilePost.myPostData}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
