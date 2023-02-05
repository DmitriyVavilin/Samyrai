import React from "react";
import {StoreContext} from "../../StoreContext";
import {Friends} from "./Friends";

export const FriendsContainer = () => {
    return (
       <StoreContext.Consumer>
           {
               (store)=>{
                   let state = store
                   return(
                       <Friends title={'Friends'} dialogs={store.getState().dialogsPage.dialogs}/>
                   )
               }
           }
       </StoreContext.Consumer>
    )
}