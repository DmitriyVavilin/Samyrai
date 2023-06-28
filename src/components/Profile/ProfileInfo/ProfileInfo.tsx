import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../Preloader/Preloader";
import {ProfileType} from "components/redux/reducer/profileReducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

type ProfileInfo = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfo) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.img}>
                <img
                    src={'https://p4.wallpaperbetter.com/wallpaper/797/280/934/anime-attack-on-titan-attack-on-titan-colossal-titan-wallpaper-preview.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>

                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>

                </div>

                <ul>
                    <li>
                        <span>{props.profile.fullName}</span>
                    </li>
                    <li>
                        <span>{props.profile.contacts.facebook}</span>
                    </li>
                    <li>
                        <span>{props.profile.contacts.github}</span>
                    </li>
                    <li>
                        <span>{props.profile.contacts.vk}</span>
                    </li>
                    <li>
                        <span>{props.profile.contacts.instagram}</span>
                    </li>
                    <li>
                        <span>{props.profile.contacts.twitter}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}