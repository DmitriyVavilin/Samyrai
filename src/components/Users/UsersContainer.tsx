import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    UserStateType,
    UserType
} from "../redux/reducer/usersReducer";
import {Users} from "./Users";
import axios from "axios";
import {Preloader} from "../../Preloader/Preloader";

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
    toggleIsFetching: (isFetching: boolean) => void

}

export class UsersAPIComponent extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            // this.props.setTotalCount(response.data.totalCount)  ****** отрисует странички всех users  *******
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })

    }

    render() {
        return<>
            {this.props.isFetching ? <Preloader/> : null }
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

export const UsersContainer = connect(mapStateToProps, {
    follow,unFollow,setUsers,setCurrentPage,setTotalCount,toggleIsFetching
})(UsersAPIComponent)