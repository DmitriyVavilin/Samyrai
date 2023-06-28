import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getStatus, ProfileType, setUsersProfile, updateStatus} from "components/redux/reducer/profileReducer";
import {RootStateType} from "../redux/redux-store";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToProps = {
    profile: ProfileType
    status: string
    authorizedUserId: null | number
    isAuth: boolean
}
type mapDispatchToProps = {
    setUsersProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: string
}

export type ProfileContainerPropsType = mapStateToProps & mapDispatchToProps

export type OwnType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<OwnType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId === null ? '2' : this.props.authorizedUserId.toString()
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile{...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}


const mapStateToProps = (state: RootStateType): mapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.authUsers.userId,
    isAuth: state.authUsers.isAuth
})

export default compose<React.ComponentType>(connect(mapStateToProps, {
    setUsersProfile,
    getUserProfile,
    getUserStatus: getStatus, updateStatus
}), withRouter, withAuthRedirect)(ProfileContainer)


