import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUsersProfile} from "../redux/reducer/profileReducer";
import {RootStateType} from "../redux/redux-store";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";


type mapStateToProps = {
    profile: ProfileType
}
type mapDispatchToProps = {
    setUsersProfile: (profile: ProfileType) => void
}

type PathParamsType = {
    userId: string
}

export type ProfileContainerPropsType = mapStateToProps & mapDispatchToProps

export type OwnType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<OwnType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userId).then(response => {
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
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent)
