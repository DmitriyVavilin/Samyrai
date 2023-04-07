import React from 'react';

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
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
    }


    render() {
        return <div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div> :
                <div>
                    <input autoFocus={true} value={this.props.status} onBlur={this.deActivateEditMode}/>
                </div>
            }
        </div>
    }
};

export default ProfileStatus