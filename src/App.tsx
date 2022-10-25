import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            {/*<Profile/>*/}
            <div className={'app-wrapper-content'}>
               <Dialogs/>
            </div>
        </div>

    );
}


export default App;
