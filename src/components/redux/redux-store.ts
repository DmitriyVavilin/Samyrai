import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profileReducer";
import {dialogsReducer} from "./reducer/dialogsReducer";
import {sideBarReducer} from "./reducer/sideBarReducer";
import {usersReducer} from "./reducer/usersReducer";
import {authReducer} from "./reducer/authReducer";
import thunkMiddleware from 'redux-thunk'


let rootReducer = combineReducers({
    authUsers: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})


export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof rootReducer>
export type RootStoreType = typeof store
export type AppDispatchType = typeof store.dispatch

