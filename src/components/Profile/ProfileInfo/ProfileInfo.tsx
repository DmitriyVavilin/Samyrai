import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "Preloader/Preloader";
import {ProfileType} from "components/redux/reducer/profileReducer";
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatus/ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/bussiness-man.png'
import loadingPhoto from './../../../assets/images/loadingPhoto.png'
import ProfileDataFormRedux, {ProfileDataFormType} from "components/Profile/ProfileInfo/ProfileDataForm";

type ProfileInfo = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataFormType) => void
}

export const ProfileInfo: React.FC<ProfileInfo> = ({
                                                       profile,
                                                       updateStatus,
                                                       status,
                                                       isOwner,
                                                       savePhoto,
                                                       saveProfile
                                                   }) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const onSubmit = (data: ProfileDataFormType) => {
        saveProfile(data)
        setEditMode(false)
    }

    if (!profile) {
        return <Preloader/>
    }

    let profilePhoto = profile.photos.large ? profile.photos.large : userPhoto
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <img className={s.user} src={profilePhoto}/>
                {isOwner && (<>
                        <label className={s.customFileInput} htmlFor={"add_avatar"}>
                            <div className={s.refreshPhoto}>
                                <img className={s.loadingPhoto} src={loadingPhoto}/>
                                Загрузить фото
                            </div>
                        </label>
                        <input
                            id={"add_avatar"}
                            hidden
                            type="file"
                            name="file"
                            onChange={onMainPhotoSelected}
                        />
                    </>
                )}
                {editMode
                    ? <ProfileDataFormRedux initialValues={{
                        fullName: profile.fullName,
                        aboutMe: profile.aboutMe,
                        lookingForAJob: profile.lookingForAJob,
                        lookingForAJobDescription: profile.lookingForAJobDescription
                    }} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}


type ContactTypeProps = {
    contactTitle: string
    contactValue: any
}

type ProfileDataProps = {
    profile: ProfileType
    isOwner?: boolean
    goToEditMode?: () => void
}

const ProfileData: React.FC<ProfileDataProps> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
            <div>
                <b>Full Name:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob && <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

export const Contact: React.FC<ContactTypeProps> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}

