import React from "react";
import {sendMessageCreator, StateDialogsType, updateNewMessageBodyCreator} from "../redux/reducer/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";


// компонента больше не нужна!!! export const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store)=>{
//                     let state = store.getState()
//                     const onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator())
//                     }
//
//                     const onNewMessageChange = (body:string) => {
//                         store.dispatch(updateNewMessageBodyCreator(body))
//                     }
//
//                     return(
//                         <Dialogs
//                             dialogsPage={state.dialogsPage}
//                             dispatch={store.dispatch}
//                             updateNewMessageBodyCreator={onNewMessageChange}
//                             sendMessageCreator={onSendMessageClick} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
//
// }   ''//

export type DialogsPropsType = mapStateToProps & mapDispatchPropsType

type mapStateToProps = {
    dialogsPage: StateDialogsType
    isAuth: boolean

}

type mapDispatchPropsType = {
    updateNewMessageBodyCreator: (body: string) => void
    sendMessageCreator: () => void
}


let AuthRedirectComponent = (props:DialogsPropsType) => {
    if(props.isAuth === false) return <Redirect to={'/login'}/>
    return <Dialogs isAuth={props.isAuth} dialogsPage={props.dialogsPage} sendMessageCreator={props.sendMessageCreator} updateNewMessageBodyCreator={props.updateNewMessageBodyCreator}/>
}

const mapStateToProps = (state: RootStateType): mapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.authUsers.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewMessageBodyCreator: (body) => {
            dispatch(updateNewMessageBodyCreator(body))

        },
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        },

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)