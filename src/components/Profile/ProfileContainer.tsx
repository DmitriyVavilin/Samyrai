import React from "react";
import {connect} from "react-redux";
import {getUserProfile, ProfileType, setUsersProfile} from "../redux/reducer/profileReducer";
import {RootStateType} from "../redux/redux-store";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


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




// let AuthRedirectComponent = (props:OwnType) => {
//     if(props.isAuth === false) return <Redirect to={'/login'}/>
//     return <ProfileContainer profile={props.profile} isAuth={props.isAuth} setUsersProfile={props.setUsersProfile}
//                              getUserProfile={props.getUserProfile} history={props.history} location={props.location} match={props.match}/>
// }

const mapStateToProps = (state: RootStateType): mapStateToProps => ({
    profile: state.profilePage.profile,
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default WithAuthRedirect(connect(mapStateToProps, {setUsersProfile, getUserProfile})(WithUrlDataContainerComponent))
