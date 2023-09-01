import React from "react";
import s from "../MyPost/MyPost.module.css";
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";
import {AddNewPostFormRedux, AddNewPostFormType} from "./AddNewPostForm/AddNewPostForm";

export const MyPost: React.FC<MyPostPropsType> = React.memo(({posts, addPost}) => {

    const postElements = posts.map((el, index) => <Post key={index} messages={el.messages} likesCount={el.likesCount}/>)

    const addNewProfile = (values: AddNewPostFormType) => {
        debugger
        addPost(values.newPost)
    }
    return (
        <div className={s.postBlock}>
            <h3 className={s.h3}>My post</h3>
            <div className={s.addPost}>
                <div>
                    <AddNewPostFormRedux onSubmit={addNewProfile}/>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
})