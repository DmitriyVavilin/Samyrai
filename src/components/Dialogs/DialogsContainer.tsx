import React from "react";
import {sendMessageCreator, StateDialogsType} from "components/redux/reducer/dialogsReducer";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {Dialogs} from "./Dialogs";
import {withRouter} from "react-router-dom";


export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType

type MapStateToPropsType = {
    dialogsPage: StateDialogsType
}

type MapDispatchPropsType = {
    sendMessageCreator: (newMessageBody: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessageCreator: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        },

    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(Dialogs)

