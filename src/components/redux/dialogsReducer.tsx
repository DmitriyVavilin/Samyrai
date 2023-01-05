import React from "react";
import {ActionTypeDispatch, StateDialogsType} from "./state";


export const dialogsReducer = (state: StateDialogsType, action: ActionTypeDispatch): StateDialogsType => {

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