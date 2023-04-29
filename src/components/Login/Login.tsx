import React from 'react';
import {LoginForm,} from "./LoginForm/LoginForm";


export const Login = () => {

    // const  onSubmit = (formData:FormDataType) => {
    //     console.log(formData)
    // }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
            {/*<LoginReduxForm onSubmit={onSubmit}/>*/}
        </div>
    );
};

