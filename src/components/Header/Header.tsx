import React from "react";
import s from './Heade.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return(
        <header className={s.header}>
            <img src={'https://www.mirf.ru/wp-content/uploads/2021/04/Ataka-titanov-Eren_titan.jpg'}/>
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}