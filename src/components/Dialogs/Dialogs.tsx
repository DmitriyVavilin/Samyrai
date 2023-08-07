import React from "react";
import s from "./Dialogs.module.css"
import {DialogItems} from "./DialogItems/DialogItems";
import {MessagesItem} from "./MessageItem/MessageItem";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux, AddMessageFormType} from "./DialogsForm/AddMessageForm";

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessageCreator}) => {
    const dialogsElements = dialogsPage.dialogs.map((d) => <DialogItems key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = dialogsPage.messages.map((m) => <MessagesItem key={m.id} message={m.message}/>)

    const addNewMessage = (values: AddMessageFormType) => {
        sendMessageCreator(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}