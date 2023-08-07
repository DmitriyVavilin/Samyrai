import s from "../Dialogs.module.css";
import React from "react";

export type MessagesItemPropsType = {
    message: string
}

export const MessagesItem: React.FC<MessagesItemPropsType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}