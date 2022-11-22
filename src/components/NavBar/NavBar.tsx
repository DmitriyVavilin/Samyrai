import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";
import {DialogsType} from "../redux/state";

type propsNavBar = {
    dialogs: DialogsType[]
}
export const NavBar = (props: propsNavBar) => {
    return (
        <nav className={s.nav}>
            <ul className={s.item}>
                <li><NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to={'/news'} activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to={'/music'} activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink></li>
                <Friends title={'Friends'} dialogs={props.dialogs}/>
            </ul>
        </nav>
    )
}