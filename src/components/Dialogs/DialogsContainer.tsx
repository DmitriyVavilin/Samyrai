import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItems} from "./DialogItems/DialogItems";
import {MessagesItem} from "./MessageItem/MessageItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/reducer/dialogsReducer";
import {RootStoreType} from "../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store:RootStoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState()
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
       <Dialogs
           dialogsPage={state.dialogsPage}
           dispatch={props.store.dispatch}
           updateNewMessageBodyCreator={onNewMessageChange}
           sendMessageCreator={onSendMessageClick} />
    )
}