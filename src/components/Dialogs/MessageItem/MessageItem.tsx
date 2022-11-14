import s from "../Dialogs.module.css";
import React from "react";

export type MessagesItemPropsType = {
    message: string
}

export const MessagesItem = (props:MessagesItemPropsType) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}