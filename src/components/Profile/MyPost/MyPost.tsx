import React from "react";
import s from "../MyPost/MyPost.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../App";



type MyPostPropsType = {
    myPostData: PostType[]
}

export const MyPost = (props: MyPostPropsType) => {

    const postElements = props.myPostData.map((el) => <Post messages={el.messages} likesCount={el.likesCount}/>)
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