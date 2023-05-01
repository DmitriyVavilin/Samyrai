import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators.js";

export type AddMessageFormType = {
    newMessageBody:string
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} component={TextArea} name={'newMessageBody'} validate={[required,maxLength100]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogsMessageForm'})(AddMessageForm)
