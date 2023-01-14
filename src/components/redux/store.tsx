import React from "react";
import {addPostCreator, profileReducer, updateNewPostTextCreator} from "./reducer/profileReducer";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./reducer/dialogsReducer";
import {sideBarReducer} from "./reducer/sideBarReducer";

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

export type StateSideBarType = {}
export type StatePropsType = {
    profilePage: StatePostType
    dialogsPage: StateDialogsType
    sideBar: StateSideBarType
}
export type StoreType = {
    _state: StatePropsType
    _callSubscriber: () => void
    subscribe: (callBack: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionTypeDispatch) => void

}

export type ActionTypeDispatch =
    ReturnType<typeof addPostCreator> |
    ReturnType<typeof updateNewPostTextCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof sendMessageCreator>

// export let store: StoreType = {
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Tatyana'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hello!!!'},
//                 {id: 2, message: 'How are you?'},
//                 {id: 3, message: 'What do you do?'},
//                 {id: 4, message: 'I have a two dogs'},
//                 {id: 5, message: 'I`m want you)'}
//             ],
//             newMessageBody: '',
//         },
//         profilePage: {
//             posts: [
//                 {id: 1, messages: 'Hi, how are you?', likesCount: 100},
//                 {id: 2, messages: 'It`s my first post', likesCount: 150},
//             ],
//             newPostText: 'it-kamasutra'
//         },
//         sideBar: {}
//     },
//     _callSubscriber() {
//         console.log('state is changed')
//     },
//     subscribe(callBack) {
//         this._callSubscriber = callBack
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action:ActionTypeDispatch) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sideBar = sideBarReducer(this._state.sideBar, action)
//         this._callSubscriber()
//     }
// }


