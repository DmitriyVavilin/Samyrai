import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


export type DialogItemsPropsType = {
    name: string
    id: number
}

type MessagesItemPropsType = {
    message: string
}

const MessagesItem = (props:MessagesItemPropsType) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const DialogItems = (props:DialogItemsPropsType) => {
    let path = '/dialogs1' + props.id
    return(
        <div className={path}>
            <NavLink to={'/dialogs1' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Tatyana'}
    ]

    let messages = [
        {id: 1, message: 'Hello!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What do you do?'},
        {id: 4, message: 'I have a two dogs'},
        {id: 5, message: 'I`m want you)'}
    ]

    const dialogsElements = dialogs.map((d) => <DialogItems name={d.name} id={d.id}/>)

    const messagesElements = messages.map((m) => <MessagesItem message={m.message}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}