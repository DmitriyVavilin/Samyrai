import React from 'react';
import {FormDataType, LoginReduxForm,} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../redux/reducer/authReducer";
import {RootStateType} from "../redux/redux-store";

type DispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = ({login}: DispatchPropsType) => {
    const onSubmit = (data: FormDataType) => {
        login(data.login,data.password,data.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};




export default connect<{}, DispatchPropsType, {}, RootStateType>(() => ({}), {login})(Login)
