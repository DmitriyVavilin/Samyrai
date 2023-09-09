import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "Preloader/Preloader";
import {ProfileType} from "components/redux/reducer/profileReducer";
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatus/ProfileStatusWithHooks";
import User from './../../../assets/images/bussiness-man.png'

type ProfileInfo = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileInfo: React.FC<ProfileInfo> = ({profile, updateStatus, status, isOwner}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {

    }
    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <img className={s.user} src={profile.photos.large || User}/>
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