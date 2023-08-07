import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusType> = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [profileStatus, setProfileStatus] = useState(status)

    useEffect(() => {
        setProfileStatus(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {

        setEditMode(false)
        updateStatus(profileStatus)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode ?
            <div>
                <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
            </div> :
            <div>
                <input onChange={onStatusChange} autoFocus value={profileStatus} onBlur={deActivateEditMode}/>
            </div>
        })
    </div>
}
export default ProfileStatusWithHooks