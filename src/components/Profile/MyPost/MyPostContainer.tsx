import React from "react";
import {addPostCreator, PostType, StatePostType, updateNewPostTextCreator} from "../../redux/reducer/profileReducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type MyPostPropsType = MyPostDispatchPropsType & mapStateToPropsType

type MyPostDispatchPropsType = {
    updateNewPostTextCreator: (text: string) => void
    addPost: (newPostText: string) => void
}

type  mapStateToPropsType = {
    posts: PostType[],
    newPostText: string
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MyPostDispatchPropsType => {
    return {
        updateNewPostTextCreator: (text: string) => {
            let action = dispatch(updateNewPostTextCreator(text))
            dispatch(action)
        },
        addPost: (newPostText: string) => {
            dispatch(addPostCreator(newPostText))
        }
    }
}


export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)