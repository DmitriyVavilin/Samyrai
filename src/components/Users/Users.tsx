import React from 'react';
import {UsersContainerType} from "./UsersContainer";
import s from './Users.module.css'


export const Users = (props: UsersContainerType) => {

    const UnFollowHandler =  () => {

    }

    return (
        <div>
            {
                props.usersPage.users.map(el => {
                    return (
                        <div key={el.id}>
                            <span>
                                 <div>
                                    <img className={s.userPhoto} src={el.photoUrl}/>
                                </div>
                                <div>
                                    {
                                        el.followed ? <button onClick={UnFollowHandler}>UnFollow</button> : <button>Follow</button>
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

