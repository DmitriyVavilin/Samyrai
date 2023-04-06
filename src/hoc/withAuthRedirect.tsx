import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../components/redux/redux-store";


type MapStateToProps = {
    isAuth: boolean
}

type MapDispatchProps = {}

type HocProps = MapStateToProps & MapDispatchProps;

const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {isAuth: state.authUsers.isAuth}
}

export function withAuthRedirect<T extends HocProps>(Component: ComponentType<T>) {

    const RedirectComponent: React.FC<MapStateToProps & MapDispatchProps> = (props ) => {

        let {isAuth, ...resProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...resProps as T}/>
    }

    let ConnectRedirectComponent = connect<MapStateToProps, MapDispatchProps, T, RootStateType>(mapStateToProps,{})(RedirectComponent)
    return ConnectRedirectComponent
};

