import {RootStateType} from "components/redux/redux-store";
import {getAuthUserData} from "components/redux/reducer/authReducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export type appType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export const appReducer = (state: appType = initialState, action: ActionType): appType => {
    switch (action.type) {
        case 'SET-INITIALIZED-SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

type ActionType = SetInitializedSuccess
type SetInitializedSuccess = ReturnType<typeof setInitializedSuccess>

export const setInitializedSuccess = () => {
    return {
        type: 'SET-INITIALIZED-SUCCESS',
    } as const
}

export const initializeApp = () => (dispatch:TypedDispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(setInitializedSuccess())
    })
}

type TypedDispatch = ThunkDispatch<RootStateType, any, AnyAction>;