import React from 'react';
import {FormDataType, LoginReduxForm,} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../redux/reducer/authReducer";
import {RootStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";



type MapStateToProps = {
    isAuth: boolean
}

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {isAuth: state.authUsers.isAuth}
}


const Login: React.FC<LoginType> = ({login, isAuth}) => {
    const onSubmit = (data: FormDataType) => {
        login(data.login, data.password, data.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


export default connect(mapStateToProps, {login})(Login)
