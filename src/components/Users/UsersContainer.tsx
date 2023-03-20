import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {
    followSuccess,
    follow,
    getUser,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching,
    unFollowSuccess,
    unfollow,
    UserStateType,
    UserType
} from "../redux/reducer/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../../Preloader/Preloader";

export type UsersContainerType = mapStateToProps & mapDispatchToProps
export type mapStateToProps = {
    usersPage: UserStateType
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number []
}
type mapDispatchToProps = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUser: (currentPage: number, pageSize: number) => void
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void

}

export class UsersAPIComponent extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUser(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} usersPage={this.props.usersPage}
                   unFollow={this.props.unFollow} follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
            />
        </>
    }
}


const mapStateToProps = (state: RootStateType): mapStateToProps => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow: followSuccess,
    unFollow: unFollowSuccess,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUser,
    followThunk: follow,
    unfollowThunk: unfollow
})(UsersAPIComponent)