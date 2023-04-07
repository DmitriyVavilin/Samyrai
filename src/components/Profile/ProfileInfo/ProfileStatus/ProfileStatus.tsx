import React from 'react';
import {ProfileType} from "../../../redux/reducer/profileReducer";
import s from "../ProfileInfo.module.css";

type ProfileStatusType = {
    profile:ProfileType
}

export const ProfileStatus = (props: ProfileStatusType) => {
    return (
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
    );
};

