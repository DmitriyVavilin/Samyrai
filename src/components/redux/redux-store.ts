import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profileReducer";
import {dialogsReducer} from "./reducer/dialogsReducer";
import {sideBarReducer} from "./reducer/sideBarReducer";
import {usersReducer} from "./reducer/usersReducer";
import {AuthActionType, authReducer} from "./reducer/authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers({
    authUsers: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    form: formReducer
})


export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof rootReducer>
export type RootStoreType = typeof store
export type AppDispatchType = typeof store.dispatch
export type AppActionsType = AuthActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsType>