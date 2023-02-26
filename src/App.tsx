import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavBar} from "./components/NavBar/NavBar";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile'} render={() => <ProfileContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}
export default App;
