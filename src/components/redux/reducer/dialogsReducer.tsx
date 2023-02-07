import React from "react";

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

let initialState = {
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
}

export const dialogsReducer = (state: StateDialogsType = initialState, action: ActionType): StateDialogsType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case 'SEND-MESSAGE': {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state
    }
}

type ActionType = UpdateNewMessageBodyCreator | SendMessageCreator
type UpdateNewMessageBodyCreator = ReturnType<typeof updateNewMessageBodyCreator>
type SendMessageCreator = ReturnType<typeof sendMessageCreator>

export const updateNewMessageBodyCreator = (body: string) => {
    return (
        {
            type: 'UPDATE-NEW-MESSAGE-BODY',
            body: body
        } as const
    )
}
export const sendMessageCreator = () => {
    return (
        {type: 'SEND-MESSAGE'} as const
    )
}