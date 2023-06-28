import React from "react";
import s from './Friends.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {DialogsType} from "components/redux/reducer/dialogsReducer";


type FriendsTypeProps = {
    dialogs:DialogsType[]

}

export const Friends = (props: FriendsTypeProps) => {
    return (
        <div className={s.friendsTop}>
            <NavLink className={s.title} to={'/dialogs'}>{'Friends'}</NavLink>
            <div>
                <div className={s.friends}>
                    {props.dialogs.slice(0,3).map((el, index) => <div key={index} className={s.friendsItem}>
                        <img className={s.img} src={'data:image/jpeg;base64,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'}/>
                        <p className={s.friendsParagraf}>{el.name}</p>
                    </div>)}

                </div>
            </div>
        </div>
    )
}