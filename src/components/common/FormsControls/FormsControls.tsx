import React from 'react';
import s from './FormsControls.module.css'

type TextAreaType = {
    input: {}
    meta: { error: string, touched: true }
}

export const TextArea: React.FC<TextAreaType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <div>
                {hasError && <span>'some error'</span>}
            </div>
        </div>
    )
}