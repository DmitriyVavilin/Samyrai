import React from "react";
import {AppDispatchType} from "../redux-store";
import {userAPI} from "../../../api/api";

export type PostType = {
    id: number
    messages: string
    likesCount: number
}

export type StatePostType = {
    posts: PostType[]
    newPostText: string
    profile: any
}

type ProfileContactsType = {
    "facebook": string
    "website": null
    "vk": string
    "twitter": string
    "instagram": string
    "youtube": null,
    "github": string
    "mainLink": null
}

export type ProfilePhotosType = {
    "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
    "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
}

export type ProfileType = {
    "aboutMe": string
    contacts: ProfileContactsType
    "lookingForAJob": true,
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": ProfilePhotosType
}

let initialState: StatePostType = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 100},
        {id: 2, messages: 'It`s my first post', likesCount: 150},
    ],
    newPostText: 'it-kamasutra',
    profile: {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
}

export const profileReducer = (state: StatePostType = initialState, action: ActionType): StatePostType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {id: 3, messages: state.newPostText, likesCount: 200}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-USERS-PROFILE': {
            return {...state, profile: action.payload}
        }
        default:
            return state
    }
}

type ActionType = AddPostCreator | UpdateNewPostTextCreator | SetUsersProfile
type AddPostCreator = ReturnType<typeof addPostCreator>
type UpdateNewPostTextCreator = ReturnType<typeof updateNewPostTextCreator>
type SetUsersProfile = ReturnType<typeof setUsersProfile>



export const addPostCreator = (newPostText: string) => {
    return (
        {
            type: 'ADD-POST',
            newPostText: newPostText
        } as const
    )
}
export const updateNewPostTextCreator = (newText: string) => {
    return (
        {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: newText
        } as const
    )
}
export const setUsersProfile = (profile: ProfileType) => {
    return (
        {
            type: 'SET-USERS-PROFILE',
            payload: profile
        } as const
    )
}
export const getUserProfile = (userId: string) => (dispatch: AppDispatchType) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data))
    })
}

