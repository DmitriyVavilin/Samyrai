import React from 'react';
import s from './FormsControls.module.css'
import {Field} from "redux-form";
import {required} from "utils/validators/validators.js";
import {Validator} from "redux-form/lib/Field";

type TextAreaType = {
    input: {}
    meta: { error: string, touched: true }
    children?: React.ReactNode
}


export const FormControl: React.FC<TextAreaType> = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const TextArea: React.FC<TextAreaType> = (props) => {
    const {input, children, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea className={s.textArea} {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input: React.FC<TextAreaType> = (props) => {
    const {input, children, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

type createFieldFunc = (
    name: string,
    validate: Validator | Validator[] | undefined,
    component: "input" | "select" | "textarea" | React.FC<any>,
    placeholder: string,
    type: "input" | "select" | "textarea" | "checkbox" | 'password'
) => any

export const createField: createFieldFunc = (name, validate, component,
                                             placeholder, type
) =>
    <div>
        <Field type={type} validate={[required]} placeholder={placeholder} name={name} component={component}/>
    </div>

