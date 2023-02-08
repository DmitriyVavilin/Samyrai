import React from "react";


export type LocationType = {
    city: string
    counter: string
}
export type UserType = {
    id: number
    photoUrl: string
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
            photoUrl: 'https://i.pinimg.com/originals/1f/42/cf/1f42cffe6f2092e9b067227b126c1978.jpg',
            followed: false,
            fullName: 'Slava',
            status: 'I`m a boss',
            location: {city: 'Aksai', counter: 'Kazakhstan'}
        },
        {
            id: 2,
            photoUrl: 'https://i.pinimg.com/originals/1f/42/cf/1f42cffe6f2092e9b067227b126c1978.jpg',
            followed: true,
            fullName: 'Dayna',
            status: 'I`m a boss too ',
            location: {city: 'Oral', counter: 'Kazakhstan'}
        },
        {
            id: 3,
            photoUrl: 'https://i.pinimg.com/originals/1f/42/cf/1f42cffe6f2092e9b067227b126c1978.jpg',
            followed: false,
            fullName: 'Viktoria',
            status: 'I`m a boss too',
            location: {city: 'Moscow', counter: 'Russia'}
        },
        {
            id: 4,
            photoUrl: 'https://i.pinimg.com/originals/1f/42/cf/1f42cffe6f2092e9b067227b126c1978.jpg',
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
export const setUsersActionCreator = (users: []) => {
    return {
        type: 'SET-USERS',
        payload: {
            users: users
        }
    } as const
}