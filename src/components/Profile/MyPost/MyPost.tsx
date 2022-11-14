import React from "react";
import s from "../MyPost/MyPost.module.css";
import {Post} from "./Post/Post";

export const MyPost = () => {

    let myPostData = [
        {id: 1, messages: 'Hi, how are you?', likesCount: 100},
        {id: 2, messages: 'It`s my first post', likesCount: 200},
    ]


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
                <Post messages={myPostData[0].messages} likeCounts={myPostData[0].likesCount}/>
                <Post messages={myPostData[1].messages} likeCounts={myPostData[1].likesCount}/>
            </div>
        </div>
    )
}