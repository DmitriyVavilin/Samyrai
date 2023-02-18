import React from 'react';
import {UsersContainerType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'


export const Users = (props: UsersContainerType) => {
     let getUsersHandler = () => {
        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    const UnFollowHandler = (id: number) => {
        props.unFollow(id)
    }
    const FollowHandler = (id: number) => {
        props.follow(id)
    }


    return (
        <div>
            <button onClick={getUsersHandler}>Get Users</button>
            {
                props.usersPage.users.length && props.usersPage.users.map(el => {
                    return (
                        <div key={el.id}>
                            <span>
                                 <div>
                                    <img className={s.userPhoto} src={el.photos.small != null ? el.photos.small : userPhoto}/>
                                </div>
                                <div>
                                    {
                                        el.followed
                                            ? <button onClick={() => UnFollowHandler(el.id)}>UnFollow</button>
                                            : <button onClick={() => FollowHandler(el.id)}>Follow</button>
                                    }
                                </div>
                             </span>
                            <span>
                                <span>
                                    <div>{el.name}</div>
                                    <div>{el.status}</div>
                                </span>
                                <span>
                                    <div>
                                        {'el.location.city'}
                                    </div>
                                    <div>
                                        {'el.location.counter'}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
};

