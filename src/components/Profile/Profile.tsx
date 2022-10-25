import React from "react";
import s from './Profile.module.css'
import {MyPost} from "./MyPost/MyPost";
import {Post} from "./MyPost/Post/Post";

export const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src={'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'}/>
            </div>
            <div> avatar + description</div>
            <MyPost/>
        </div>
    );
}