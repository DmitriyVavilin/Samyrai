import React from "react";
import s from './Post.module.css'
import manUser from './../../../../assets/images/man.png'

type PostPropsType = {
    messages: string
    likesCount: number
}
export const Post: React.FC<PostPropsType> = ({likesCount, messages}) => {
    return (
        <div>
            <div className={s.item}>
                <img src={manUser}/>{messages}
                <div><span>Like {likesCount}</span></div>
            </div>
        </div>
    )
}