import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPost/MyPost";
import {ActionTypeDispatch, PostType, StoreType,} from "../redux/state";

type ProfilePropsType = {
    profilePage:PostType[]
    newPostText: string
    store: StoreType
    dispatch: (action: ActionTypeDispatch)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.store._state.profilePage.posts}
                    newPostText={props.store._state.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}