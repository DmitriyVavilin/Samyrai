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
    ]
}

export const dialogsReducer = (state: StateDialogsType = initialState, action: ActionType): StateDialogsType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state
    }
}

type ActionType = SendMessageCreator
type SendMessageCreator = ReturnType<typeof sendMessageCreator>

export const sendMessageCreator = (newMessageBody: string) => {
    return (
        {type: 'SEND-MESSAGE', newMessageBody} as const
    )
}