import React from "react";
import {connect} from "react-redux";
import {getUserProfile, ProfileType, setUsersProfile} from "../redux/reducer/profileReducer";
import {RootStateType} from "../redux/redux-store";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToProps = {
    profile: ProfileType
}
type mapDispatchToProps = {
    setUsersProfile: (profile: ProfileType) => void
    getUserProfile:(userId: string)=>void
}

type PathParamsType = {
    userId: string
}

export type ProfileContainerPropsType = mapStateToProps & mapDispatchToProps

export type OwnType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<OwnType> {

    componentDidMount() {
        let userId: string = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
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
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(connect(mapStateToProps, {setUsersProfile, getUserProfile}),withRouter, withAuthRedirect)(ProfileContainer)


