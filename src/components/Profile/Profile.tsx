import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {Redirect} from "react-router-dom";


export const Profile = (props: ProfileContainerPropsType) => {

    if(props.isAuth === false) return <Redirect to={'/login'}/>
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    );
}