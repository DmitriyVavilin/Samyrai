import React from "react";


export type LocationType = {
    city: string
    counter: string
}
export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type UserStateType = {
    users: Array<UserType>
}

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Slava',
            status: 'I`m a boss',
            location: {city: 'Aksai', counter: 'Kazakhstan'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Dayna',
            status: 'I`m a boss too ',
            location: {city: 'Oral', counter: 'Kazakhstan'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Viktoria',
            status: 'I`m a boss too',
            location: {city: 'Moscow', counter: 'Russia'}
        },
        {
            id: 4,
            followed: true,
            fullName: 'Dmitriy',
            status: 'I`m a boss too',
            location: {city: 'New York', counter: 'United States'}
        },
    ],
}

export const usersReducer = (state: UserStateType = initialState, action: ActionType): UserStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return state
        }
        case 'UNFOLLOW': {
            return state
        }
        default:
            return state
    }
}


type ActionType = FollowActionCreator | UnFollowActionCreator
type FollowActionCreator = ReturnType<typeof followActionCreator>
type UnFollowActionCreator = ReturnType<typeof unFollowActionCreator>

export const followActionCreator = () => {
    return {
        type: 'FOLLOW'
    }as const
}

export const unFollowActionCreator = () => {
    return {
        type: 'UNFOLLOW'
    }as const
}