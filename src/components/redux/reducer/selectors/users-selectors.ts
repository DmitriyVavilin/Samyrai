import React from "react";
import {RootStateType} from "components/redux/redux-store";

export const getUsers = (state: RootStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalCount = (state: RootStateType) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress= (state: RootStateType) => {
    return state.usersPage.followingInProgress
}

