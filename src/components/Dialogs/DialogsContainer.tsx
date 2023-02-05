import React from "react";
import { StoreContext } from "../../StoreContext";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/reducer/dialogsReducer";
import {RootStoreType} from "../redux/redux-store";
import {Dialogs} from "./Dialogs";




export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    let state = store.getState()
                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    const onNewMessageChange = (body:string) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }

                    return(
                        <Dialogs
                            dialogsPage={state.dialogsPage}
                            dispatch={store.dispatch}
                            updateNewMessageBodyCreator={onNewMessageChange}
                            sendMessageCreator={onSendMessageClick} />
                    )
                }
            }
        </StoreContext.Consumer>
    )

}