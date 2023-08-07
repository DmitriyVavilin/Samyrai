import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "utils/validators/validators.js";
import {TextArea} from "../../../common/FormsControls/FormsControls";


export type AddNewPostFormType = {
    newPost: string
}

const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Post Message'} component={TextArea} name={'newPost'} validate={[required,maxLength10]}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    );
};

export const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: 'AddNewPostForm'})(AddNewPostForm)
