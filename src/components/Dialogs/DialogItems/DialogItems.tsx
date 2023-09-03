import {NavLink} from "react-router-dom";
import React from "react";
import s from './../Dialogs.module.css'
import userDialogs from './../../../assets/images/userDialogs.png'

export type DialogItemsPropsType = {
    name: string
    id: number
}

export const DialogItems: React.FC<DialogItemsPropsType> = ({id, name}) => {
    let path = '/dialogs1' + id
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <div className={s.dialogsContent}>
                <img className={s.dialogsImg}
                     src={userDialogs} alt={name}/>
            </div>
            <div className={s.nameContainer}>
                <NavLink  to={path}>{name}</NavLink>
            </div>
        </div>
    )
}
