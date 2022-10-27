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
    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <DialogItems name={'Dimych'} id={1} />
                <DialogItems name={'Andrey'} id={2} />
                <DialogItems name={'Sveta'} id={3} />
                <DialogItems name={'Sasha'} id={4} />
                <DialogItems name={'Tatyana'} id={5} />
            </div>
            <div className={s.messages}>
                <MessagesItem message={'Hi'}/>
                <MessagesItem message={'How are you'}/>
                <MessagesItem message={'My friends'}/>
            </div>
        </div>
    )
}