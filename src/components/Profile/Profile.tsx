import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {Preloader} from "Preloader/Preloader";

type ProfilePagePropType = {
    isOwner:boolean
    savePhoto:(file: File) => void
    status:string
}
export const Profile: React.FC<ProfileContainerPropsType & ProfilePagePropType> = ({profile,savePhoto, status, updateStatus,isOwner}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostContainer/>
        </div>
    );
}