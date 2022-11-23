import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPost/MyPost";
import {PostType} from "../redux/state";

type ProfilePropsType = {
    myPostData:PostType[]
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost myPostData={props.myPostData}/>
        </div>
    );
}