import React from "react";
import {connect} from "react-redux";
import {
    getUserProfile,
    getStatus,
    ProfileType,
    setUsersProfile,
    updateStatus, savePhoto, saveProfile
} from "components/redux/reducer/profileReducer";
import {RootStateType} from "../redux/redux-store";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileDataFormType} from "components/Profile/ProfileInfo/ProfileDataForm";


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
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataFormType) => Promise<void>

}

type PathParamsType = {
    userId: string
}

export type ProfileContainerPropsType = mapStateToProps & mapDispatchToProps
export type OwnType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<OwnType> {

    refreshProfile() {
        const {authorizedUserId, history, getUserProfile, getUserStatus} = this.props
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = authorizedUserId === null ? '2' : authorizedUserId.toString()
            if (!userId) {
                history.push('/login')
            }
        }
        getUserProfile(userId)
        getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<OwnType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile  isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}


const mapStateToProps = (state: RootStateType): mapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.authUsers.userId,
    isAuth: state.authUsers.isAuth,
})

export default compose<React.ComponentType>(connect(mapStateToProps, {
    setUsersProfile,
    getUserProfile,
    getUserStatus: getStatus, updateStatus, savePhoto,saveProfile
}), withRouter, withAuthRedirect)(ProfileContainer)


