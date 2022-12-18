import {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, store, StoreType} from "./components/redux/state";

type AppPropsType = {
    store: StoreType
    dispatch:(action: ActionsTypes)=>void
}

const App: FC<AppPropsType> = (props) => {

    const state = props.store.getState()

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar dialogs={state.dialogsPage.dialogs}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                                addDialog={props.store.addDialog.bind(props.store)}
                                                                messages={state.dialogsPage.messages}
                                                                dispatch={props.dispatch}
                                                                />}/>
                <Route path={'/profile'} render={() => <Profile profilePage={state.profilePage.myPost}
                                                                dispatch={props.dispatch}
                                                                newPostText={state.profilePage.newPostText}
                                                                />}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}


export default App;
