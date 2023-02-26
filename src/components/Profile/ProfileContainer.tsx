import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";


export class ProfileContainer extends React.Component {
    render() {
        return (
            <div>
                <ProfileInfo/>
                <MyPostContainer/>
            </div>
        )
    }
}