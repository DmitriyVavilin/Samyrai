import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {
    follow, getUserThunkCreator,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching,
    unFollow,
    UserStateType,
    UserType
} from "../redux/reducer/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../../Preloader/Preloader";
import {userApi} from "../../api/api";

export type UsersContainerType = mapStateToProps & mapDispatchToProps
export type mapStateToProps = {
    usersPage: UserStateType
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:number []
}
type mapDispatchToProps = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUserThunkCreator:(currentPage: number, pageSize: number)=>void

}

export class UsersAPIComponent extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        userApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })

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
    follow, unFollow, setUsers,
    setCurrentPage, setTotalCount,
    toggleIsFetching, toggleFollowingInProgress,getUserThunkCreator
})(UsersAPIComponent)