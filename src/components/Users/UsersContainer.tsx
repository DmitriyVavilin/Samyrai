import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {
    followActionCreator,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersActionCreator,
    unFollowActionCreator,
    UserStateType,
    UserType
} from "../redux/reducer/usersReducer";
import {UsersAPIComponent} from "./UsersAPIComponent";

export type UsersContainerType = mapStateToProps & mapDispatchToProps

export type mapStateToProps = {
    usersPage: UserStateType
    pageSize: number
    totalCount: number
    currentPage: number
}

type mapDispatchToProps = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number)=>void

}

const mapStateToProps = (state: RootStateType): mapStateToProps => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        follow: (userID: number) => {
            dispatch(followActionCreator(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowActionCreator(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)