import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "utils/validators/validators.js";
import {createField, TextArea} from "../../../common/FormsControls/FormsControls";
import s from './AddNewPostForm.module.css'

export type AddNewPostFormType = {
    newPost: string
}

const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField('newPost', [required,maxLength10], TextArea, 'Post Message', 'input')}
            <div>
                <button className={s.btn}>ADD YOUR POST</button>
            </div>
        </form>
    );
};

export const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: 'AddNewPostForm'})(AddNewPostForm)
