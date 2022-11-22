import React from "react";

export type PostType ={
    id: number
    messages: string
    likesCount: number
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type ObjectDialogs = {
    dialogs: DialogsType[]
    messages: MessageType[]
}

export type ObjectPost = {
    myPostData: PostType[]
}

export type StatePropsType = {
    profilePost: ObjectPost
    profileDialogs: ObjectDialogs
}

export let state: StatePropsType = {
    profileDialogs: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Tatyana'}
        ],
        messages: [
            {id: 1, message: 'Hello!!!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What do you do?'},
            {id: 4, message: 'I have a two dogs'},
            {id: 5, message: 'I`m want you)'}
        ]
    },
    profilePost: {
        myPostData: [
            {id: 1, messages: 'Hi, how are you?', likesCount: 100},
            {id: 2, messages: 'It`s my first post', likesCount: 150},
        ]
    }

}