import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPost/MyPost";
import {PostType} from "../../App";

//
// export type ProfileMyPostProps = {
//     id: number
//     messages: string
//     likesCount: number
//
// }

type ProfilePropsType = {
    myPostData:PostType[]
}

export const Profile = (props: ProfilePropsType) => {

    // let myPostData = [
    //     {id: 1, messages: 'Hi, how are you?', likesCount: 100},
    //     {id: 2, messages: 'It`s my first post', likesCount: 150},
    // ]

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost myPostData={props.myPostData}/>
        </div>
    );
}