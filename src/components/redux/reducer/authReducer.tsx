import React from "react";
import {AppDispatchType} from "../redux-store";
import {authAPI, userAPI} from "../../../api/api";


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

export const authReducer = (state: authUsersType = initialState, action: ActionType): authUsersType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}


type ActionType = SetUserData


type SetUserData = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, email, login}

    } as const
}


export const getAuthUserData = () => (dispatch: AppDispatchType) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email))
        }
    })
}