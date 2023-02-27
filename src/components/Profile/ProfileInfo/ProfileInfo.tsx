import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../Preloader/Preloader";
import {ProfileType} from "../../redux/reducer/profileReducer";

type ProfileInfo = {
    profile: ProfileType
}

export const ProfileInfo = (props:ProfileInfo) => {
    if(!props.profile) {
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
                <div>
                    <span>{props.profile.fullName}</span>
                </div>
                <ul>
                    <li>
                        {props.profile.contacts.facebook}
                    </li>
                    <li>
                        {props.profile.contacts.github}
                    </li>
                    <li>
                        {props.profile.contacts.vk}
                    </li>
                    <li>
                        {props.profile.contacts.instagram}
                    </li>
                    <li>
                        {props.profile.contacts.twitter}
                    </li>
                </ul>
            </div>
        </div>
    )
}