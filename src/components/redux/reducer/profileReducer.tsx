import React from "react";
import any = jasmine.any;

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

export type ProfileType = {
    contacts: ProfileContactsType
}

let initialState: StatePostType = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 100},
        {id: 2, messages: 'It`s my first post', likesCount: 150},
    ],
    newPostText: 'it-kamasutra',
    profile: ProfileType
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

export const setUsersProfile = (profile: any) => {
    return (
        {
            type: 'SET-USERS-PROFILE',
            payload: profile
        } as const
    )
}