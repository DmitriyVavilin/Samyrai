import React from "react";
import s from "../MyPost/MyPost.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../redux/state";



type MyPostPropsType = {
    myPostData: PostType[]
}

export const MyPost = (props: MyPostPropsType) => {

    const postElements = props.myPostData.map((el) => <Post messages={el.messages} likesCount={el.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onclickButtonHandler = () => {
        debugger
        const text = newPostElement.current?.value
        alert('ffff')
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div className={s.addPost}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={onclickButtonHandler}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}