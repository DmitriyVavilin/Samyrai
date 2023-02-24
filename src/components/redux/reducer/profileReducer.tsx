import React from "react";

export type PostType = {
    id: number
    messages: string
    likesCount: number
}

export type StatePostType = {
    posts: PostType[]
    newPostText: string
}

let initialState = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 100},
        {id: 2, messages: 'It`s my first post', likesCount: 150},
    ],
    newPostText: 'it-kamasutra'
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
        default:
            return state
    }
}

type ActionType = AddPostCreator | UpdateNewPostTextCreator
type AddPostCreator = ReturnType<typeof addPostCreator>
type UpdateNewPostTextCreator = ReturnType<typeof updateNewPostTextCreator>

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