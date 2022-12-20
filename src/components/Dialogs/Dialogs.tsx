import React from "react";
import s from "./Dialogs.module.css"
import {DialogItems} from "./DialogItems/DialogItems";
import {MessagesItem} from "./MessageItem/MessageItem";
import {DialogsType} from "../redux/state";


type MessageType = {
    id: number
    message: string
}

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map((d) => <DialogItems  name={d.name} id={d.id}/>)

    const messagesElements = props.messages.map((m) => <MessagesItem message={m.message}/>)

    const newPostArea = React.createRef<HTMLTextAreaElement>()

    const onclickHandler = () => {
        const newText = newPostArea.current?.value
        alert(newText)
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={()=>{}} ref={newPostArea}/>
                <div>
                    <button onClick={onclickHandler}>Add</button>
                </div>
            </div>
        </div>
    )
}