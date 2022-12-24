import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPost/MyPost";
import {PostType, store} from "../redux/state";

type ProfilePropsType = {
    profilePage:PostType[]
    addPost:()=>void
    newPostText: string
    updatePostText:(newText: string)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={store._state.profilePage.posts} updatePostText={store.updatePostText}
                    newPostText={store._state.profilePage.newPostText} addPost={store.addPost}/>
        </div>
    );
}