import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPost/MyPost";
import {ActionTypeDispatch, PostType,} from "../redux/store";

type ProfilePropsType = {
    profilePage:PostType[]
    newPostText: string
    dispatch: (action: ActionTypeDispatch)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.profilePage}
                    newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}