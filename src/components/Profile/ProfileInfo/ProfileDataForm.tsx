import React from "react";
import {createField, Input, TextArea} from "components/common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";

export type ProfileDataFormType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
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
            {/*<div>*/}
            {/*    <b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {*/}
            {/*    // @ts-ignore*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
            {/*</div>*/}
        </form>
    )
}

const ProfileDataFormRedux = reduxForm<ProfileDataFormType>({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormRedux