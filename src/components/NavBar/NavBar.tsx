import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import iconsProfile from '../../assets/iconsNavBar/user.png'
import iconsMessages from '../../assets/iconsNavBar/message.png'
import iconsFriends from '../../assets/iconsNavBar/friends.png'
import iconsUsers from '../../assets/iconsNavBar/group.png'
import iconsMusic from '../../assets/iconsNavBar/music-note.png'
export const NavBar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={s.btn} to={'/profile'} activeClassName={s.active}><img className={s.icons} height={'20px'} src={iconsProfile}/>Profile</NavLink>
                <NavLink className={s.btn} to={'/dialogs'} activeClassName={s.active}><img className={s.icons} height={'20px'} src={iconsMessages}/>Messages</NavLink>
                <NavLink className={s.btn} to={'/friends'} activeClassName={s.active}><img className={s.icons} height={'20px'} src={iconsFriends}/>Friends</NavLink>
                <NavLink className={s.btn} to={'/users'} activeClassName={s.active}><img className={s.icons} height={'20px'} src={iconsUsers}/>Users</NavLink>
                <NavLink className={s.btn} to={'/music'} activeClassName={s.active}><img className={s.icons} height={'20px'} src={iconsMusic}/>Music</NavLink>
                <NavLink className={s.btn} to={'/settings'} activeClassName={s.active}><img className={s.icons} height={'20px'} src={iconsMessages}/>Settings</NavLink>
                {/*<NavLink className={s.btn} to={'/login'} activeClassName={s.active}><img className={s.icons} height={'20px'} src={iconsMessages}/>Login</NavLink>*/}
            </div>
        </nav>
    )
}