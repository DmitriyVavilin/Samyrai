import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profileReducer";
import {dialogsReducer} from "./reducer/dialogsReducer";
import {sideBarReducer} from "./reducer/sideBarReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sideBar: sideBarReducer
})


export let store = createStore(reducers)

export type RootStateType = ReturnType<typeof reducers>
/*export type AppDispatch = typeof store.dispatch*/
export type RootStoreType = typeof store
