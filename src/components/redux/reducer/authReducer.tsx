import React from "react";
import {AppThunk} from "../redux-store";
import {authAPI} from "../../../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


export type authUsersType = {
    isAuth: boolean
    userId: null | number,
    email: null | string,
    login: null | string,
}

const initialState: authUsersType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: authUsersType = initialState, action: AuthActionType): authUsersType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.payload
            }
        }
        case 'SET-USER-DATA-NULL': {
            return {
                ...initialState
            }
        }
        default:
            return state
    }
}


export type AuthActionType = SetUserData | SetUserDataNULL
type SetUserData = ReturnType<typeof setAuthUserData>
type SetUserDataNULL = ReturnType<typeof setAuthUserDataNull>

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {userId, email, login, isAuth}

    } as const
}

export const setAuthUserDataNull = () => {
    return {
        type: 'SET-USER-DATA-NULL',
    } as const
}


export const getAuthUserData = () => (dispatch: Dispatch<AuthActionType>) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
        }

    })
}

export const logout = (): AppThunk => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataNull())
        }
    })
}