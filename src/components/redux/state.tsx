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

type SidebarType = {}

export type StateDialogsType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}

export type StatePostType = {
    myPost: PostType[]
    newPostText: string
}

export type StatePropsType = {
    profilePage: StatePostType
    dialogsPage: StateDialogsType
    sidebar: SidebarType
}

export let state: StatePropsType = {
    dialogsPage: {
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
    profilePage: {
        myPost: [
            {id: 1, messages: 'Hi, how are you?', likesCount: 100},
            {id: 2, messages: 'It`s my first post', likesCount: 150},
        ],
        newPostText: 'it-kamasutra'
    },
    sidebar: {}
}

export let onChange = () => {}

export const subscribe = (callBack: ()=>void) => {
    onChange = callBack
}

export let addPost = () => {
    let newPost = {id: 3, messages: state.profilePage.newPostText, likesCount: 200}
    state.profilePage.myPost.push(newPost)
    onChange()
}

export let updatePostText = (newText: string) => {
    state.profilePage.newPostText = newText
    onChange()
}

export const addDialog = () => {
   let newMessage = {...state.dialogsPage.messages}
    state.dialogsPage.messages.push()
    onChange()
}

