import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "Preloader/Preloader";
import {ProfileType} from "components/redux/reducer/profileReducer";
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatus/ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/bussiness-man.png'

type ProfileInfo = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const ProfileInfo: React.FC<ProfileInfo> = ({profile, updateStatus, status, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    let profilePhoto = profile.photos.large ? profile.photos.large : userPhoto
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <img className={s.user} src={profilePhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <ul>
                    <li>
                        <span>{profile.contacts.facebook}</span>
                    </li>
                    <li>
                        <span>{profile.contacts.github}</span>
                    </li>
                    <li>
                        <span>{profile.contacts.vk}</span>
                    </li>
                    <li>
                        <span>{profile.contacts.instagram}</span>
                    </li>
                    <li>
                        <span>{profile.contacts.twitter}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}