import React from "react";
import {ActionTypeDispatch, PostType,} from "../../redux/store";
import {addPostCreator, updateNewPostTextCreator} from "../../redux/reducer/profileReducer";
import {MyPost} from "./MyPost";
import {RootStateType} from "../../redux/redux-store";


type MyPostPropsType = {
    dispatch: (action: ActionTypeDispatch)=>void
    store: RootStateType
}

export const MyPostContainer = (props: MyPostPropsType) => {
    debugger
    let state = props.store
    const addPost = () => {
        props.dispatch(addPostCreator(state.profilePage.newPostText))
    }

    const onChangePost = (text:string) => {
        let action = updateNewPostTextCreator(text)
        props.dispatch(action)

    }

    return (
       <MyPost posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}
               dispatch={props.dispatch} updateNewPostTextCreator={onChangePost}
       addPost={addPost}
       />
    )
}