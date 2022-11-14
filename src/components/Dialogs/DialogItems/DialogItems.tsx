import {NavLink} from "react-router-dom";
import React from "react";
import s from './../Dialogs.module.css'

export type DialogItemsPropsType = {
    name: string
    id: number
}

export const DialogItems = (props:DialogItemsPropsType) => {
    let path = '/dialogs1' + props.id
    return(
        <div className={s.dialogs + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
