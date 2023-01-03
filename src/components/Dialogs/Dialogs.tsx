import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItems} from "./DialogItems/DialogItems";
import {MessagesItem} from "./MessageItem/MessageItem";
import {DialogsType, sendMessageCreator, StoreType, updateNewMessageBodyCreator} from "../redux/state";


type MessageType = {
    id: number
    message: string
}

type DialogsPropsType = {
    store: StoreType
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string
}

export const Dialogs = (props: DialogsPropsType) => {
    const state = props.store.getState().dialogsPage
    const dialogsElements = state.dialogs.map((d) => <DialogItems name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map((m) => <MessagesItem message={m.message}/>)
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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