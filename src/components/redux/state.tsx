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
export type SidebarType = {}
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

type AddActionAddPostType = {
    type: 'ADD-POST'
    newPostText: string
}

type UpdateActionPostTextType ={
    type:'UPDATE-POST-TEXT'
    newText: string
}

export type ActionsTypes = UpdateActionPostTextType | AddActionAddPostType

// export let state: StatePropsType = {
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Tatyana'}
//         ],
//         messages: [
//             {id: 1, message: 'Hello!!!'},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'What do you do?'},
//             {id: 4, message: 'I have a two dogs'},
//             {id: 5, message: 'I`m want you)'}
//         ]
//     },
//     profilePage: {
//         myPost: [
//             {id: 1, messages: 'Hi, how are you?', likesCount: 100},
//             {id: 2, messages: 'It`s my first post', likesCount: 150},
//         ],
//         newPostText: 'it-kamasutra'
//     },
//     sidebar: {}
// }

export type StoreType = {
    _state: StatePropsType
    updatePostText:(newText: string)=>void
    addDialog:()=>void
    addPost:()=>void
    subscribe:(callBack: ()=>void)=>void
    onChange:()=>void
    getState:()=>StatePropsType
    dispatch:(action: ActionsTypes)=>void
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
            myPost: [
                {id: 1, messages: 'Hi, how are you?', likesCount: 100},
                {id: 2, messages: 'It`s my first post', likesCount: 150},
            ],
            newPostText: 'it-kamasutra'
        },
        sidebar: {}
    },
    dispatch (action) {
        console.log('this._state ' ,this)
        if(action.type === 'ADD-POST') {
            let newPost = {id: 3, messages: action.newPostText, likesCount: 200}
            this._state.profilePage.myPost.push(newPost)
            this.onChange()
        }else if(action.type === 'UPDATE-POST-TEXT') {

            this._state.profilePage.newPostText = action.newText
            this.onChange()
        }
    },
    subscribe(callBack){
        this.onChange = callBack
    },
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.onChange()
    },
    addDialog(){
        let newMessage = {...this._state.dialogsPage.messages}
        this._state.dialogsPage.messages.push()
        this.onChange()
    },
    addPost(){
        let newPost = {id: 3, messages: this._state.profilePage.newPostText, likesCount: 200}
        this._state.profilePage.myPost.push(newPost)
        this.onChange()
    },
    onChange(){},
    getState(){
        return this._state
    },


}

// export let onChange = () => {}

// export const subscribe = (callBack: ()=>void) => {
//     onChange = callBack
// }

// export let addPost = () => {
//     let newPost = {id: 3, messages: state.profilePage.newPostText, likesCount: 200}
//     state.profilePage.myPost.push(newPost)
//     onChange()
// }

// export let updatePostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     onChange()
// }

// export const addDialog = () => {
//    let newMessage = {...state.dialogsPage.messages}
//     state.dialogsPage.messages.push()
//     onChange()
// }

