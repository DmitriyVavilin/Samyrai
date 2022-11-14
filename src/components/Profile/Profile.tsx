import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPost/MyPost";


export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost/>
        </div>
    );
}