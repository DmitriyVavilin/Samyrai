import React from "react";
import {setAuthUserData} from "../redux/reducer/authReducer";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import axios from "axios";
import {authAPI} from "../../api/api";

export type HeaderContainerType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    isAuth: boolean
    login: string | null

}
type MapDispatchToProps = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
       authAPI.me().then(response => {
            if (response.data.resultCode == 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login, email)
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
        isAuth: state.authUsers.isAuth,
        login: state.authUsers.login
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)