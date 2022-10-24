import React from "react";
import s from "../../Profile.module.css";

export const Post = () => {
    return(
        <div>
            <div>New post</div>
            <div className={s.post}>
                post 1
            </div>
            <div className={s.post}>
                post 2
            </div>
        </div>
    )
}