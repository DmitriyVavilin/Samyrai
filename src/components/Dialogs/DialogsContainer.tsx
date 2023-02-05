import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/reducer/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType, RootStoreType} from "../redux/redux-store";
import {StateDialogsType} from "../redux/store";
import {Dispatch} from "redux";


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

}

type mapDispatchPropsType ={
    updateNewMessageBodyCreator:(body: string)=>void
    sendMessageCreator:()=>void
    dispatch:(store: RootStoreType)=>void
}
let mapStateToProps = (state:RootStateType):mapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        updateNewMessageBodyCreator: (body)=>{
            dispatch(updateNewMessageBodyCreator(body))

        },
        sendMessageCreator: ()=>{
            dispatch(sendMessageCreator())
        },
        dispatch:() => {
            dispatch(store.dispatch())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)