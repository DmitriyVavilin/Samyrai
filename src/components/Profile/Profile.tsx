import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPost/MyPost";
import {ActionsTypes, PostType} from "../redux/state";

type ProfilePropsType = {
    profilePage: PostType[]
    addPost: () => void
    newPostText: string
    updatePostText: (newText: string) => void
    dispatch:(action: ActionsTypes)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.profilePage} dispatch={props.dispatch} newPostText={props.newPostText}
                    addPost={props.addPost}/>
        </div>
    );
}