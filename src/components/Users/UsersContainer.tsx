import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {
    follow,
    requestUsers,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
    UserType
} from "components/redux/reducer/usersReducer";
import {Users} from "./Users";
import {Preloader} from "Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "components/redux/reducer/selectors/users-selectors";

export type UsersContainerType = mapStateToProps & mapDispatchToProps
export type mapStateToProps = {
    usersPage: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number []
}
type mapDispatchToProps = {
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void

}

export class UsersAPIComponent extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} usersPage={this.props.usersPage}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}


const mapStateToProps = (state: RootStateType): mapStateToProps => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export const UsersContainer = compose<React.ComponentType>(connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching,
    toggleFollowingInProgress,
    requestUsers,
    follow,
    unfollow
}), withRouter, withAuthRedirect)(UsersAPIComponent)