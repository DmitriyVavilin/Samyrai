import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    messages: string
    likesCount: number
}
export const Post: React.FC<PostPropsType> = ({likesCount, messages}) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src={'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663604556_14-phonoteka-org-p-eren-titan-art-instagram-21.jpg'}/>
                {messages}
                <div><span>Like {likesCount}</span></div>
            </div>
        </div>
    )
}