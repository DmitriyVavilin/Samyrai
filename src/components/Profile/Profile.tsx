import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPost/MyPost";
import {PostType, StoreType,} from "../redux/state";

type ProfilePropsType = {
    profilePage:PostType[]
    addPost:()=>void
    newPostText: string
    updatePostText:(newText: string)=>void
    store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.store._state.profilePage.posts} updatePostText={props.store.updatePostText}
                    newPostText={props.store._state.profilePage.newPostText} addPost={props.store.addPost}/>
        </div>
    );
}