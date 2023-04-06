import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../components/redux/redux-store";


type MapStateToProps = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType):MapStateToProps => {
    return {isAuth: state.authUsers.isAuth}
}

export const WithAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: any) => {
        if (props.isAuth === false) return <Redirect to={'/login'}/>

        return <Component value={100} {...props}/>
    }
    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectRedirectComponent
};

