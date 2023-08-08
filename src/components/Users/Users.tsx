import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "components/redux/reducer/usersReducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "components/common/Paginator/Paginator";

type UserPresentationType = {
    totalCount: number
    pageSize: number
    currentPage: number
    followingInProgress: number []
    usersPage: UserType[]
    onPageChanged: (pageNumber: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users: React.FC<UserPresentationType> = ({
                                                          usersPage,
                                                          currentPage,
                                                          pageSize,
                                                          onPageChanged,
                                                          totalCount,
                                                          unfollow,
                                                          follow,
                                                          followingInProgress
                                                      }) => {


    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize} onPageChanged={onPageChanged}
                       totalCount={totalCount}/>
            {
                usersPage.length && usersPage.map(el => {
                    return (
                        <div key={el.id}>
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
                })
            }
        </div>
    );
};

