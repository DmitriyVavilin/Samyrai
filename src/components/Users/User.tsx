import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "components/redux/reducer/usersReducer";
import {NavLink} from "react-router-dom";

type UserPropsTypeType = {
    followingInProgress: number []
    follow: (id: number) => void
    unfollow: (id: number) => void
    user: UserType
}

export const User: React.FC<UserPropsTypeType> = ({
                                                      user,
                                                      unfollow,
                                                      follow,
                                                      followingInProgress
                                                  }) => {
    return (
        <div>
                        <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={s.userPhoto}
                                     src={user.photos.small != null ? user.photos.small : userPhoto} alt={'userPhoto'}/>
                            </NavLink>

                        </div>
                        <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }

                                      }>UnFollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }
                                      }>Follow</button>
                    }
                        </div>
                        </span>
            <span>
                        <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        </span>
                        <span>
                        <div>
                    {'user.location.city'}
                        </div>
                        <div>
                    {'user.location.counter'}
                        </div>
                        </span>
                        </span>
        </div>
    )
};

