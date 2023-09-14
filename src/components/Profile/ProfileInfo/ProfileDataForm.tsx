import React from "react";
import {createField, Input, TextArea} from "components/common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {useSelector} from "react-redux";
import {RootStateType} from "components/redux/redux-store";
import {ProfileType} from "components/redux/reducer/profileReducer";
import s from "components/Login/LoginForm/LoginForm.module.css";

export type ProfileDataFormType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({handleSubmit,error   }) => {
    const profile = useSelector<RootStateType, ProfileType>(state => state.profilePage.profile)
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full Name:</b> {createField('fullName', [], Input,
                'Full name', 'input')}
            </div>
            <div>
                <b>Looking for a job:</b>
                {createField('lookingForAJob', [], Input,
                    'Looking forA job', 'checkbox',)}
            </div>
            <div>
                <b>My professional skills:</b>
                {createField('lookingForAJobDescription', [], TextArea,
                    'My professional skills', 'textarea',)}
            </div>
            <div>
                <b>About me:</b>
                {createField('AboutMe', [], TextArea,
                    'About me', 'textarea',)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {
                // @ts-ignore
                return <div key={key}>
                    <b> {createField(key, [], Input, "contacts." + key, 'input')}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm<ProfileDataFormType>({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormRedux