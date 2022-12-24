import React from "react";

export type PostType = {
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
export type StateDialogsType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}
export type StatePostType = {
    posts: PostType[]
    newPostText: string

}
export type StatePropsType = {
    profilePage: StatePostType
    dialogsPage: StateDialogsType

}
export type StoreType = {
    _state: StatePropsType
    addPost: () => void
    updatePostText: (newText: string) => void
    _callSubcriber: () => void
    subscriber: (callBack: () => void) => void
}


export let store: StoreType = {
    _state: {
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
            posts: [
                {id: 1, messages: 'Hi, how are you?', likesCount: 100},
                {id: 2, messages: 'It`s my first post', likesCount: 150},
            ],
            newPostText: 'it-kamasutra'
        }
    },
    _callSubcriber() {
        console.log('state is changed')
    },
    subscriber(callBack: () => void) {
        this._callSubcriber = callBack
    },
    addPost() {
        debugger
        let newPost = {id: 3, messages: this._state.profilePage.newPostText, likesCount: 200}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubcriber()
    },
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubcriber()
    }
}
