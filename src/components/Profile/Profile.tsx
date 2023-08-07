import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";

export const Profile: React.FC<ProfileContainerPropsType> = ({profile, status, updateStatus}) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostContainer/>
        </div>
    );
}