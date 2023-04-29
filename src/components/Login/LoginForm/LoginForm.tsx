import React from 'react';
import {Field, FormikProvider, useFormik} from "formik";

export type FormDataType = {
    login: string
    password: string
    rememberMe: string

}

export const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: ''
        }, onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    })
    return (
        <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} values={formik.values.login} onChange={formik.handleChange} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} values={formik.values.password} onChange={formik.handleChange} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} values={formik.values.rememberMe} onChange={formik.handleChange} component={'input'}/>
                <span>remember for me</span>
            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
            </FormikProvider>
    )
};


// export const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
//     console.log('rerender')
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={'Login'} name={'login'} component={'input'}/>
//             </div>
//             <div>
//                 <Field placeholder={'Password'} name={'password'} component={'input'}/>
//             </div>
//             <div>
//                 <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
//                 <span>remember for me</span>
//             </div>
//             <div>
//                 <button type={'submit'}>Login</button>
//             </div>
//         </form>
//     );
// };
//
// export const LoginReduxForm = reduxForm<FormDataType>({
//     form: 'login'
// })(LoginForm)
