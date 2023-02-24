import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {
    fetchingAC,
    followActionCreator,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersActionCreator,
    unFollowActionCreator,
    UserStateType,
    UserType
} from "../redux/reducer/usersReducer";
import {Users} from "./Users";
import axios from "axios";

export type UsersContainerType = mapStateToProps & mapDispatchToProps
export type mapStateToProps = {
    usersPage: UserStateType
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToProps = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setFetching: (isFetching: boolean) => void

}

class UsersAPIComponent extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            // this.props.setTotalCount(response.data.totalCount)  ****** отрисует странички всех users  *******
        })

    }

    render() {
        return<>
            {this.props.isFetching ? <img/> : null }
            <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} usersPage={this.props.usersPage}
                   unFollow={this.props.unFollow} follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
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
        isFetching: state.usersPage.isFetching
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
        },
        setFetching: (isFetching: boolean) => {
            dispatch(fetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)