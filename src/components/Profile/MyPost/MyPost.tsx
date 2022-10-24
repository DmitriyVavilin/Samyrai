import React from "react";
import s from "../Profile.module.css";
import {Post} from "./Post/Post";

export const MyPost = () => {
    return(
        <div className={s.item}>
            My post
            <Post/>
        </div>
    )
}