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


let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Tatyana'}
]

let messagesData = [
    {id: 1, message: 'Dimych'},
    {id: 2, message: 'Andrey'},
    {id: 3, message: 'Sveta'},
    {id: 4, message: 'Sasha'},
    {id: 5, message: 'Tatyana'}
]


export const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItems name={'Andrey'} id={2} />
                <DialogItems name={'Sveta'} id={3} />
                <DialogItems name={'Sasha'} id={4} />
                <DialogItems name={'Tatyana'} id={5} />
            </div>
            <div className={s.messages}>
                <MessagesItem message={messagesData[0].message}/>
                <MessagesItem message={'How are you'}/>
                <MessagesItem message={'My friends'}/>
            </div>
        </div>
    )
}