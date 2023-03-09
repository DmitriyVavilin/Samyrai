import React from "react";


type MessageAuthType = []
export type DataAuthType = {
    id: null | number
    email: null |string
    login: null | string
}
export type authUsersType = {
    resultCode: number
    messages: Array<MessageAuthType>
    data: DataAuthType
    isAuth: boolean
}

const initialState: authUsersType = {
    resultCode: 0,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}

export const authReducer = (state: authUsersType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        }
        default:
            return state
    }
}


type ActionType = SetUserData


type SetUserData = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: DataAuthType) => {
    return {
        type: 'SET-USER-DATA',
        data: data
    } as const
}


