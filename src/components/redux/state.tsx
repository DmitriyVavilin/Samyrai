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
    newMessageBody: string
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
    _callSubscriber: () => void
    subscriber: (callBack: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionTypeDispatch) => void

}

export type ActionTypeDispatch =
    ReturnType<typeof addPostCreator> |
    ReturnType<typeof updateNewPostTextCreator> |
    ReturnType<typeof updateNewMessageBodyCreator>|
    ReturnType<typeof sendMessageCreator>

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
            ],
            newMessageBody: '',
        },
        profilePage: {
            posts: [
                {id: 1, messages: 'Hi, how are you?', likesCount: 100},
                {id: 2, messages: 'It`s my first post', likesCount: 150},
            ],
            newPostText: 'it-kamasutra'
        }
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    subscriber(callBack) {
        this._callSubscriber = callBack
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {id: 3, messages: this._state.profilePage.newPostText, likesCount: 200}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        } else if(action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber()
        }

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
export const updateNewMessageBodyCreator = (body: string) => {
    return (
        {
            type: 'UPDATE-NEW-MESSAGE-BODY',
            body: body
        } as const
    )
}
export const sendMessageCreator = () => {
    return(
        {type: 'SEND-MESSAGE'}as const
    )
}