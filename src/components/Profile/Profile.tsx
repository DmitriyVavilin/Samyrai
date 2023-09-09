import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";

type ProfilePagePropType = {
    isOwner:boolean
}
export const Profile: React.FC<ProfileContainerPropsType & ProfilePagePropType> = ({profile, status, updateStatus,isOwner}) => {
    return (
        <div className={s.content}>
            <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostContainer/>
        </div>
    );
}