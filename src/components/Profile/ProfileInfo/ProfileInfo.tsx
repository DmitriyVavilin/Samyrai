import React from "react";
import s from './ProfileInfo.module.css'

type ProfileInfo = {
    profile: any
}

export const ProfileInfo = (props:ProfileInfo) => {
    return (
        <div>
            <div className={s.img}>
                <img
                    src={'https://p4.wallpaperbetter.com/wallpaper/797/280/934/anime-attack-on-titan-attack-on-titan-colossal-titan-wallpaper-preview.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photo.large}/>
                avatar + description
            </div>
        </div>
    )
}