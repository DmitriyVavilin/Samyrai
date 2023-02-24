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
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: UserStateType = {
    users: [],
    pageSize: 10,
    totalCount: 50,
    currentPage: 1,
    isFetching: false
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
                users: action.payload.users
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        case 'SET-TOTAL-COUNT': {
            return {
                ...state,
                totalCount: action.payload.totalCount
            }
        }
        case 'FETCHING': {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        }

        default:
            return state
    }
}


type ActionType = FollowActionCreator | UnFollowActionCreator
    | setUsersActionCreator | SetCurrentPageAC
    | SetTotalCount | Fetching


type FollowActionCreator = ReturnType<typeof followActionCreator>
type UnFollowActionCreator = ReturnType<typeof unFollowActionCreator>
type setUsersActionCreator = ReturnType<typeof setUsersActionCreator>
type SetCurrentPageAC = ReturnType<typeof setCurrentPageAC>
type SetTotalCount = ReturnType<typeof setTotalCountAC>
type Fetching = ReturnType<typeof fetchingAC>


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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}
export const fetchingAC = (isFetching: boolean) => {
    return {
        type: 'FETCHING',
        payload: {
            isFetching
        }
    }as const
}