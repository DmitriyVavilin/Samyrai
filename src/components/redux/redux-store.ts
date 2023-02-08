import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profileReducer";
import {dialogsReducer} from "./reducer/dialogsReducer";
import {sideBarReducer} from "./reducer/sideBarReducer";
import {usersReducer} from "./reducer/usersReducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})


export let store = createStore(rootReducer)
export type RootStateType = ReturnType<typeof rootReducer>
export type RootStoreType = typeof store

