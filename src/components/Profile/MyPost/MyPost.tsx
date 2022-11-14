import React from "react";
import s from "../MyPost/MyPost.module.css";
import {Post} from "./Post/Post";

export const MyPost = () => {

    let myPostData = [
        {id: 1, messages: 'Hi, how are you?', likesCount: 100},
        {id: 2, messages: 'It`s my first post', likesCount: 150},
    ]

    const postElements = myPostData.map((el) => <Post messages={el.messages} likeCounts={el.likesCount}/>)
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div className={s.addPost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}