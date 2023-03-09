import React from "react";


type MessageAuthType = []
export type DataAuthType = {
    id: null
    email: null
    login: null
}
export type authUsersType = {
    resultCode: number
    messages: Array<MessageAuthType>
    data: DataAuthType
}

const initialState: authUsersType = {
    resultCode: 0,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null
    }
}

export const authReducer = (state: authUsersType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                data: {...action.data}
            }
        }
        default:
            return state
    }
}


type ActionType = SetUserData


type SetUserData = ReturnType<typeof setUserData>

export const setUserData = (data: DataAuthType) => {
    return {
        type: 'SET-USER-DATA',
        data: data
    } as const
}


