import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {Preloader} from "Preloader/Preloader";
import {ProfileDataFormType} from "components/Profile/ProfileInfo/ProfileDataForm";

type ProfilePagePropType = {
    isOwner:boolean
    savePhoto:(file: File) => void
    status:string
    saveProfile: (profile: ProfileDataFormType) => void
}
export const Profile: React.FC<ProfileContainerPropsType & ProfilePagePropType> = ({profile,savePhoto, status, updateStatus,isOwner,saveProfile}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <ProfileInfo  saveProfile={saveProfile} savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostContainer/>
        </div>
    );
}