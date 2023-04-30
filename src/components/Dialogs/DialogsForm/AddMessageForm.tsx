import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type AddMessageFormType = {
    addNewMessage:(values: any) => void
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} component={'textarea'} name={'newMessageBody'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogsMessageForm'})(AddMessageForm)
