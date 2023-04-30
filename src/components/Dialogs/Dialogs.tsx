import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItems} from "./DialogItems/DialogItems";
import {MessagesItem} from "./MessageItem/MessageItem";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux, AddMessageFormType} from "./DialogsForm/AddMessageForm";

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItems key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map((m) => <MessagesItem key={m.id} message={m.message}/>)

    const addNewMessage = (values: AddMessageFormType) => {
        props.sendMessageCreator(values.newMessageBody)
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