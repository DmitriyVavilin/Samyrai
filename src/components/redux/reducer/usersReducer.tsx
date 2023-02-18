import React from "react";


export type LocationType = {
    city: string
    counter: string
}
export type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type UserStateType = {
    users: Array<UserType>
}

let initialState = {
    users: []
}

export const usersReducer = (state: UserStateType = initialState, action: ActionType): UserStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.payload.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.payload.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        }
        case 'SET-USERS': {
            return {
                ...state,
                users: [...state.users, ...action.payload.users]
            }
        }
        default:
            return state
    }
}


type ActionType = FollowActionCreator | UnFollowActionCreator | setUsersActionCreator
type FollowActionCreator = ReturnType<typeof followActionCreator>
type UnFollowActionCreator = ReturnType<typeof unFollowActionCreator>
type setUsersActionCreator = ReturnType<typeof setUsersActionCreator>

export const followActionCreator = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId: userId
        }
    } as const
}
export const unFollowActionCreator = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId: userId
        }
    } as const
}
export const setUsersActionCreator = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users: users
        }
    } as const
}