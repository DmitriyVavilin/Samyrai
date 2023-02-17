import React from 'react';
import {UsersContainerType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";


export const Users = (props: UsersContainerType) => {

    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://i.pinimg.com/originals/1f/42/cf/1f42cffe6f2092e9b067227b126c1978.jpg',
                    followed: false,
                    fullName: 'Slava',
                    status: 'I`m a boss',
                    location: {city: 'Aksai', counter: 'Kazakhstan'}
                },
                {
                    id: 2,
                    photoUrl: 'https://i.pinimg.com/originals/1f/42/cf/1f42cffe6f2092e9b067227b126c1978.jpg',
                    followed: true,
                    fullName: 'Dayna',
                    status: 'I`m a boss too ',
                    location: {city: 'Oral', counter: 'Kazakhstan'}
                },
                {
                    id: 3,
                    photoUrl: 'https://i.pinimg.com/originals/1f/42/cf/1f42cffe6f2092e9b067227b126c1978.jpg',
                    followed: false,
                    fullName: 'Viktoria',
                    status: 'I`m a boss too',
                    location: {city: 'Moscow', counter: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: 'https://i.pinimg.com/originals/1f/42/cf/1f42cffe6f2092e9b067227b126c1978.jpg',
                    followed: true,
                    fullName: 'Dmitriy',
                    status: 'I`m a boss too',
                    location: {city: 'New York', counter: 'United States'}
                },
            ])
        })
    }

    const UnFollowHandler = (id: number) => {
        props.unFollow(id)
    }
    const FollowHandler = (id: number) => {
        props.follow(id)
    }


    return (
        <div>
            {
                props.usersPage.users.length && props.usersPage.users.map(el => {
                    return (
                        <div key={el.id}>
                            <span>
                                 <div>
                                    <img className={s.userPhoto} src={el.photoUrl}/>
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
                                    <div>{el.fullName}</div>
                                    <div>{el.status}</div>
                                </span>
                                <span>
                                    <div>
                                        {el.location.city}
                                    </div>
                                    <div>
                                        {el.location.counter}
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

