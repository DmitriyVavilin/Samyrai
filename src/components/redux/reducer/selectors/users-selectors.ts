import {RootStateType} from "components/redux/redux-store";
import {createSelector} from "reselect";
import {UserType} from "components/redux/reducer/usersReducer";

const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector,(users: UserType[])=>{
    return users.filter(el => true)
})

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

export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}

