import {NavLink} from "react-router-dom";
import React from "react";
import s from './../Dialogs.module.css'

export type DialogItemsPropsType = {
    name: string
    id: number
}

export const DialogItems = (props: DialogItemsPropsType) => {
    let path = '/dialogs1' + props.id
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <div>
                <img className={s.dialogsImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffk80ltMT1J-0nN3YDGzPq6pbfGWQeC50ug&usqp=CAU'}/>
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
