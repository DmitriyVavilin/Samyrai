import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItems} from "./DialogItems/DialogItems";
import {MessagesItem} from "./MessageItem/MessageItem";
import {ActionTypeDispatch, DialogsType, StoreType,} from "../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/reducer/dialogsReducer";


type MessageType = {
    id: number
    message: string
}

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string
    dispatch: (action: ActionTypeDispatch)=>void
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogs.map((d) => <DialogItems name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map((m) => <MessagesItem message={m.message}/>)
    const newMessageBody = props.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder={'Enter your message'} onChange={onNewMessageChange}
                              value={newMessageBody}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}