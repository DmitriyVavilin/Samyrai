import React from "react";
import {addPostCreator, PostType} from "components/redux/reducer/profileReducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type MyPostPropsType = MyPostDispatchPropsType & mapStateToPropsType

type MyPostDispatchPropsType = {
    addPost: (newPostText: string) => void
}

type  mapStateToPropsType = {
    posts: PostType[],
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MyPostDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostCreator(newPostText))
        }
    }
}


export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)