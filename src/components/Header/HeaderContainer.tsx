import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {getAuthUserData} from "../redux/reducer/authReducer";

export type HeaderContainerType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    isAuth: boolean
    login: string | null

}
type MapDispatchToProps = {
    getAuthUserData:()=>void
}


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
      this.props.getAuthUserData()
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


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)