import React from "react";
import s from './Heade.module.css'
import {NavLink} from "react-router-dom";
import {HeaderContainerType} from "./HeaderContainer";
import headerIcon from './../../assets/images/headersIcon.png'

export const Header: React.FC<HeaderContainerType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img src={headerIcon}/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login} - <button className={s.btn} onClick={logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}