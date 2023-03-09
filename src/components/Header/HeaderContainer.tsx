import React from "react";
import {authUsersType, DataAuthType} from "../redux/reducer/authReducer";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";

type HeaderContainerType = MapStateToProps & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return (
            <>
                <Header/>
            </>)
    }
}

type MapStateToProps = {
    data: DataAuthType
}

type MapDispatchToProps = {
    setUserData: (data: DataAuthType) => void
}

const mapStateToProps = (state: RootStateType): DataAuthType => {
    return {
        data: state.authUsers.data
    }
}


export default connect(mapStateToProps, {setUserData})(Header)