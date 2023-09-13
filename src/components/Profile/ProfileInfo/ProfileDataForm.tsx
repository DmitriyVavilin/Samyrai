import React from "react";
import {ProfileType} from "components/redux/reducer/profileReducer";
import {Contact} from "components/Profile/ProfileInfo/ProfileInfo";
import {createField, Input, TextArea} from "components/common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {useSelector} from "react-redux";
import {RootStateType} from "components/redux/redux-store";

export type ProfileDataFormType = {
    profile: ProfileType
    isOwner?: boolean
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({handleSubmit}) => {

    const profile = useSelector<RootStateType, ProfileType>(state => state.profilePage.profile)

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
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm<ProfileDataFormType>({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormRedux