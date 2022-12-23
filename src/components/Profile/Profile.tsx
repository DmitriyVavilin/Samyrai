import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPost/MyPost";
import {PostType} from "../redux/state";

type ProfilePropsType = {
    profilePage:PostType[]
    addPost:(newPostText:string)=>void
    newPostText: string
    updatePostText:(newText: string)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.profilePage} updatePostText={props.updatePostText} newPostText={props.newPostText} addPost={props.addPost}/>
        </div>
    );
}