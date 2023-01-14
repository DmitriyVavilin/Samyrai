import React from "react";
import {ActionTypeDispatch, StatePostType} from "../store";

let initialState = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 100},
        {id: 2, messages: 'It`s my first post', likesCount: 150},
    ],
    newPostText: 'it-kamasutra'
}

export const profileReducer = (state: StatePostType = initialState, action: ActionTypeDispatch): StatePostType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {id: 3, messages: state.newPostText, likesCount: 200}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.newText
            return state
        }
        default: return state
    }
}

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