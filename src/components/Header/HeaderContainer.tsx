import React from "react";
import {DataAuthType, setUserData} from "../redux/reducer/authReducer";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";

export type HeaderContainerType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    data: DataAuthType
}
type MapDispatchToProps = {
    setUserData: (data: DataAuthType) => void
}


class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return (
            <>
                <Header {...this.props}/>
            </>)
    }
}


const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        data: state.authUsers.data
    }
}


export default connect(mapStateToProps, {setUserData})(Header)