import React from "react";
import {ActionTypeDispatch, PostType,} from "../../redux/store";
import {addPostCreator, updateNewPostTextCreator} from "../../redux/reducer/profileReducer";
import {MyPost} from "./MyPost";


type MyPostPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionTypeDispatch)=>void
}

export const MyPostContainer = (props: MyPostPropsType) => {
    const addPost = () => {
        props.dispatch(addPostCreator(props.newPostText))
    }

    const onChangePost = (text:string) => {
        let action = updateNewPostTextCreator(text)
        props.dispatch(action)

    }

    return (
       <MyPost posts={props.posts} newPostText={props.newPostText}
               dispatch={props.dispatch} updateNewPostTextCreator={onChangePost}
       addPost={addPost}
       />
    )
}