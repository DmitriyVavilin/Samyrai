import React from 'react';
import s from './FormsControls.module.css'

type TextAreaType = {
    input: {}
    meta: { error: string, touched: true }
    children?: React.ReactNode
}


export const FormControl:React.FC<TextAreaType> = ({input, meta,children, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
        <div className={s.formControl + ' ' + (hasError ? s.error: '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea: React.FC<TextAreaType> = (props) => {
    const {input,children,meta,...restProps} = props
    return (
          <FormControl {...props}>
              <textarea {...input} {...restProps}/>
          </FormControl>
    )
}

export const Input: React.FC<TextAreaType> = (props) => {
    const {input,children,meta,...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}