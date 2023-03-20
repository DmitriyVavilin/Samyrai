import React from 'react';
import style from "./Users.module.css";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserStateType} from "../redux/reducer/usersReducer";
import {NavLink} from "react-router-dom";
import {userApi} from "../../api/api";

type UserPresentationType = {
    totalCount: number
    pageSize: number
    currentPage: number
    followingInProgress: number []
    usersPage: UserStateType
    unFollow: (userID: number) => void
    follow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void
}

export const Users = (props: UserPresentationType) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map((el, index) => <span key={index}
                                                   className={props.currentPage === el ? style.selected : '' + style.cursor}
                                                   onClick={(e) => props.onPageChanged(el)}> {el}</span>)
                }
            </div>
            {
                props.usersPage.users.length && props.usersPage.users.map(el => {
                    return (
                        <div key={el.id}>
                        <span>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img className={s.userPhoto}
                                     src={el.photos.small != null ? el.photos.small : userPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                    {
                        el.followed
                            ? <button disabled={props.followingInProgress.some(id => id === el.id)}
                                      onClick={() => {
                                          props.unfollowThunk(el.id)
                                      }

                                      }>UnFollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === el.id)}
                                      onClick={() => {
                                          props.followThunk(el.id)
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
                })
            }
        </div>
    );
};

