import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators.js";
import {Input} from "../../common/FormsControls/FormsControls";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean

}

export const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={'Login'} name={'login'} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} placeholder={'Password'} name={'password'} type={'password'} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} type={'checkbox'} name={'rememberMe'} component={Input}/>
                <span>remember for me</span>
            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
