import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../redux/reducer/profileReducer";
import {MyPost} from "./MyPost";
import {RootStoreType} from "../../redux/redux-store";


type MyPostPropsType = {
    store: RootStoreType
}

export const MyPostContainer = (props: MyPostPropsType) => {
    let state = props.store
    const addPost = () => {
        state.dispatch(addPostCreator(state.getState().profilePage.newPostText))
    }

    const onChangePost = (text:string) => {
        let action = updateNewPostTextCreator(text)
        state.dispatch(action)

    }

    return (
       <MyPost posts={state.getState().profilePage.posts} newPostText={state.getState().profilePage.newPostText}
               dispatch={state.dispatch} updateNewPostTextCreator={onChangePost}
       addPost={addPost}
       />
    )
}