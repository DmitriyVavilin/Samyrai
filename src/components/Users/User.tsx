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

    const el = user

    return (
        <div>
                        <span>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img className={s.userPhoto}
                                     src={el.photos.small != null ? el.photos.small : userPhoto} alt={'userPhoto'}/>
                            </NavLink>

                        </div>
                        <div>
                    {
                        el.followed
                            ? <button disabled={followingInProgress.some(id => id === el.id)}
                                      onClick={() => {
                                          unfollow(el.id)
                                      }

                                      }>UnFollow</button>
                            : <button disabled={followingInProgress.some(id => id === el.id)}
                                      onClick={() => {
                                          follow(el.id)
                                      }
                                      }>Follow</button>
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
};

