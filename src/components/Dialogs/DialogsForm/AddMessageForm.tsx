import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "utils/validators/validators.js";
import s from './AddMessageForm.module.css'

export type AddMessageFormType = {
    newMessageBody: string
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} component={TextArea} name={'newMessageBody'}
                       validate={[required, maxLength100]}/>
            </div>
            <div>
                <button className={s.btn}>SEND MESSAGE</button>
            </div>
        </form>
    );
};

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogsMessageForm'})(AddMessageForm)
