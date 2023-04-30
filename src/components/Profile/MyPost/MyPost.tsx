import React from "react";
import s from "../MyPost/MyPost.module.css";
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";
import {MyPostFormRedux, AddNewPostFormType} from "./MyPostForm/AddNewPostForm";

export const MyPost = (props: MyPostPropsType) => {

    const postElements = props.posts.map((el, index) => <Post key={index} messages={el.messages}
                                                              likesCount={el.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost(props.newPostText)
    }

    const onPostChange = () => {
        let textPost = newPostElement.current?.value
        props.updateNewPostTextCreator(textPost ? textPost : '')
    }

    const addNewProfile = (values: AddNewPostFormType) => {
        props.addPost(values.newPost)
    }

    return (
        <div className={s.postBlock}>
            <h3 className={s.h3}>My post</h3>
            <div className={s.addPost}>
                <div>
                    {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>*/}
                    <MyPostFormRedux onSubmit={addNewProfile}/>
                </div>

                <div>
                    {/*<button onClick={onAddPost}>add post</button>*/}
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}