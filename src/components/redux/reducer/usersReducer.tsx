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
    followingInProgress: number []
}

let initialState: UserStateType = {
    users: [],
    pageSize: 10,
    totalCount: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2, 3]
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
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        }
        case 'TOGGLE-IS-FOLLOWING': {
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(el => el != action.payload.userId)
            }
        }

        default:
            return state
    }
}


type ActionType = FollowActionCreator | UnFollowActionCreator
    | setUsersActionCreator | SetCurrentPageAC
    | SetTotalCount | Fetching | Following


type FollowActionCreator = ReturnType<typeof follow>
type UnFollowActionCreator = ReturnType<typeof unFollow>
type setUsersActionCreator = ReturnType<typeof setUsers>
type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
type SetTotalCount = ReturnType<typeof setTotalCount>
type Fetching = ReturnType<typeof toggleIsFetching>
type Following = ReturnType<typeof toggleFollowingInProgress>

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId: userId
        }
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId: userId
        }
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users: users
        }
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING',
        payload: {
            isFetching,
            userId
        }
    } as const
}