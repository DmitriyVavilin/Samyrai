import React from "react";
import axios from "axios/index";
import {connect} from "react-redux";
import {setUsersProfile} from "../redux/reducer/profileReducer";
import {RootStateType} from "../redux/redux-store";
import {Profile} from "./Profile";


type mapStateToProps = {
    profile: any
}
type mapDispatchToProps = {
    setUsersProfile: (profile: any) => void
}
export type ProfileContainerPropsType = mapStateToProps & mapDispatchToProps

class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            setUsersProfile(response.data.profile)
        })
    }

    render() {
        return (
            <div>
                <Profile{...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


const mapStateToProps = (state: RootStateType): mapStateToProps => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer)
