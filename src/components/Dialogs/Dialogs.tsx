import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItems} from "./DialogItems/DialogItems";
import {MessagesItem} from "./MessageItem/MessageItem";
import {sendMessageCreator} from "../redux/reducer/dialogsReducer";
import {DialogsPropsType} from "./DialogsContainer";


// type DialogsPropsType = {
//     dialogsPage:StateDialogsType
//     dispatch: (action: ActionTypeDispatch) => void
//     updateNewMessageBodyCreator: (body: string) => void
//     sendMessageCreator:()=>void
// }

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItems key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map((m) => <MessagesItem key={m.id} message={m.message}/>)
    const newMessageBody = props.dialogsPage.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessageCreator()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBodyCreator(body)
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