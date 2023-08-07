import React from "react";
import s from './Heade.module.css'
import {NavLink} from "react-router-dom";
import {HeaderContainerType} from "./HeaderContainer";

export const Header: React.FC<HeaderContainerType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img src={'https://www.mirf.ru/wp-content/uploads/2021/04/Ataka-titanov-Eren_titan.jpg'}/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}