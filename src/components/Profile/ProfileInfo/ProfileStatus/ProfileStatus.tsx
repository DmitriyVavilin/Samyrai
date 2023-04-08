import React, {ChangeEvent} from 'react';
import {setStatus} from "../../../redux/reducer/profileReducer";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }


    render() {
        return <div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div> :
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deActivateEditMode}/>
                </div>
            }
        </div>
    }
};

export default ProfileStatus