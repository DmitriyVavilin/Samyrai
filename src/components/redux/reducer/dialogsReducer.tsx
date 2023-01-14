import React from "react";
import {ActionTypeDispatch, StateDialogsType} from "../store";


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

export const dialogsReducer = (state: StateDialogsType = initialState, action: ActionTypeDispatch): StateDialogsType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            state.newMessageBody = action.body
            return state
        }
        case 'SEND-MESSAGE': {
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        }
        default:
            return state
    }
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
    return (
        {type: 'SEND-MESSAGE'} as const
    )
}