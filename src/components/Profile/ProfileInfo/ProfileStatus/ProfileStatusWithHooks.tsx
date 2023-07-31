import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (props) => {

    const [editMode, SetEditMode] = useState<boolean>(false)
    const [status, SetStatus] = useState(props.status)

    const activateEditMode = () => {
        SetEditMode(true)
    }

    const deActivateEditMode = () => {
        SetEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        SetStatus(e.currentTarget.value)
    }

        return <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div> :
                <div>
                    <input onChange={onStatusChange} autoFocus value={status} onBlur={deActivateEditMode}/>
                </div>
            })
        </div>
}



export default ProfileStatusWithHooks