import React from 'react';
import {UserType} from "components/redux/reducer/usersReducer";
import {Paginator} from "components/common/Paginator/Paginator";
import {User} from "components/Users/User";

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
                            <User key={el.id} user={el} followingInProgress={followingInProgress} follow={follow}
                                  unfollow={unfollow}/>

                        )
                    }
                )
            }
        </div>
    )
};