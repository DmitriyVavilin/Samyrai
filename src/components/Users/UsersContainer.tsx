import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {
    followActionCreator,
    setUsersActionCreator,
    unFollowActionCreator,
    UserStateType,
    UserType
} from "../redux/reducer/usersReducer";
import UsersClass from "./UsersClass";
import {Users} from "./Users";

export type UsersContainerType = mapStateToProps & mapDispatchToProps

export type mapStateToProps = {
    usersPage: UserStateType
}

type mapDispatchToProps = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: RootStateType): mapStateToProps => {
    return {
        usersPage: state.usersPage
    }
}


const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToProps => {
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
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)