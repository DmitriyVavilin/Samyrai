import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {required} from "utils/validators/validators.js";
import s from './LoginForm.module.css'
import {createField, Input} from "components/common/FormsControls/FormsControls";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('login', [required], Input, 'Login', 'input')}
            {createField('password', [required], Input, 'Password', 'password')}
            {createField('rememberMe', [required], Input, 'Checkbox', 'checkbox')}
            <span>remember for me</span>
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
