import React from "react";
import s from "../Profile.module.css";
import {Post} from "./Post/Post";

export const MyPost = () => {
    return (
        <div>
            <div>My post</div>
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                <Post messages={'Hi, how are you?'} likeCounts={100}/>
                <Post messages={'It`s my first post'} likeCounts={200}/>
            </div>
        </div>
    )
}