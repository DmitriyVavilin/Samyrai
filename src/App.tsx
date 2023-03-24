import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavBar} from "./components/NavBar/NavBar";
import {UsersContainer} from "./components/Users/UsersContainer";
import WithUrlDataContainerComponent from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId?'} render={() => <WithUrlDataContainerComponent/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
                <Route path={'/login'} render={() => <Login />}/>
            </div>
        </div>
    );
}
export default App;
