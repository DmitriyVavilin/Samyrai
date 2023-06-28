import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "components/redux/reducer/profileReducer";
import {dialogsReducer} from "components/redux/reducer/dialogsReducer";
import {sideBarReducer} from "components/redux/reducer/sideBarReducer";
import {usersReducer} from "components/redux/reducer/usersReducer";
import {AuthActionType, authReducer} from "components/redux/reducer/authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "components/redux/reducer/appReducer";


let rootReducer = combineReducers({
    authUsers: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    form: formReducer,
    appReducer:appReducer
})


export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof rootReducer>
export type RootStoreType = typeof store
export type AppDispatchType = typeof store.dispatch
export type AppActionsType = AuthActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsType>

//@ts-ignore
window.store = store