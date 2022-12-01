import React from "react";
import s from "../MyPost/MyPost.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../redux/state";
import {renderEnterTree} from "../../../render";


type MyPostPropsType = {
    posts: PostType[]
    addPost:(postMessage: string)=>void
    newPostText: string
    updatePostText:(newText: string)=>void
}

export const MyPost = (props: MyPostPropsType) => {

    const postElements = props.posts.map((el) => <Post messages={el.messages} likesCount={el.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let textPost = newPostElement.current?.value
        props.addPost(textPost ? textPost : '')
        props.updatePostText('')
    }

    const onChangePost = () => {
        let textPost = newPostElement.current?.value
        props.updatePostText(textPost ? textPost: '')
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div className={s.addPost}>
                <div>
                    <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}