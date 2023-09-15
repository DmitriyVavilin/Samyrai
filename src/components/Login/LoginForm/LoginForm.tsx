import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {required} from "utils/validators/validators.js";
import s from './LoginForm.module.css'
import {createField, Input} from "components/common/FormsControls/FormsControls";
import {useSelector} from "react-redux";
import {RootStateType} from "components/redux/redux-store";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captchaUrl: string | undefined
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const captchaURL = useSelector<RootStateType, string | null>(state => state.authUsers.captchaUrl)
    return (
        <form onSubmit={handleSubmit}>
            {createField('login', [required], Input, 'Login', 'input')}
            {createField('password', [required], Input, 'Password', 'password')}
            {createField('rememberMe', [required], Input, 'Checkbox', 'checkbox')}
            {captchaURL && <img src={captchaURL}/>}
            {captchaURL &&  createField('captcha', [required], Input, 'Symbol from image', 'input')}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    );
};
export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
