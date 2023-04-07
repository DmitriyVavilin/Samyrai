import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../Preloader/Preloader";
import {ProfileType} from "../../redux/reducer/profileReducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

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
                    <ProfileStatus profile={props.profile}/>
            </div>
        </div>
    )
}