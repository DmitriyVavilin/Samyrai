import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import style from './UsersClass.module.css'

export class UsersAPIComponent extends React.Component<UsersContainerType> {

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
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {
                        pages.map((el,index) => <span key={index}
                            className={this.props.currentPage === el ? style.selected : '' + style.cursor}
                            onClick={(e) => this.onPageChanged(el)}> {el}</span>)
                    }
                </div>
                {
                    this.props.usersPage.users.length && this.props.usersPage.users.map(el => {
                        return (
                            <div key={el.id}>
                        <span>
                        <div>
                        <img className={s.userPhoto}
                             src={el.photos.small != null ? el.photos.small : userPhoto}/>
                        </div>
                        <div>
                    {
                        el.followed
                            ? <button onClick={() => this.props.unFollow(el.id)}>UnFollow</button>
                            : <button onClick={() => this.props.follow(el.id)}>Follow</button>
                    }
                        </div>
                        </span>
                                <span>
                        <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                        </span>
                        <span>
                        <div>
                    {'el.location.city'}
                        </div>
                        <div>
                    {'el.location.counter'}
                        </div>
                        </span>
                        </span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}