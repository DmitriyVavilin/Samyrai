import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypeDispatch,} from "../redux/store";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {RootStateType} from "../redux/redux-store";

type ProfilePropsType = {
    store: RootStateType
    dispatch: (action: ActionTypeDispatch)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostContainer store={props.store}
                             dispatch={props.dispatch}/>
        </div>
    );
}