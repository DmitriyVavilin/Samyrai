import React from "react";
import {ActionTypeDispatch, StateSideBarType} from "../store";


let initialState = {}

export const sideBarReducer = (state:StateSideBarType = initialState,action: ActionTypeDispatch):StateSideBarType => {
    return state
}