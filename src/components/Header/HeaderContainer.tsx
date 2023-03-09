import React from "react";
import {DataAuthType, setAuthUserData} from "../redux/reducer/authReducer";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import axios from "axios";

export type HeaderContainerType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    data: DataAuthType
    isAuth: boolean
    login: null | string
}
type MapDispatchToProps = {
    setAuthUserData: (data: DataAuthType) => void
}


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode == 0) {
                this.props.setAuthUserData(response.data.data.login)
            }
        })
    }

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>)
    }
}


const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        data: state.authUsers.data,
        isAuth: state.authUsers.isAuth,
        login: state.authUsers.data.login
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)