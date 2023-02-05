import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../redux/reducer/profileReducer";
import {MyPost} from "./MyPost";
import {StoreContext} from "../../../StoreContext";


export const MyPostContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store
                const addPost = () => {
                    state.dispatch(addPostCreator(state.getState().profilePage.newPostText))
                }

                const onChangePost = (text: string) => {
                    let action = updateNewPostTextCreator(text)
                    state.dispatch(action)

                }
                return(
                    <MyPost posts={state.getState().profilePage.posts}
                            newPostText={state.getState().profilePage.newPostText}
                            dispatch={state.dispatch} updateNewPostTextCreator={onChangePost}
                            addPost={addPost}
                    />
                )
            }
        }</StoreContext.Consumer>

)
}