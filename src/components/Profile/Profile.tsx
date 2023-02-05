import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";


export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    );
}