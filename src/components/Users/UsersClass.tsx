import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UsersContainerType} from "./UsersContainer";
import axios from "axios";


class UsersClass extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
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

export default UsersClass