import {AppThunk} from "../redux-store";
import {authAPI} from "api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


export type authUsersType = {
    isAuth: boolean
    userId: null | number,
    email: null | string,
    login: null | string,
}

const initialState: authUsersType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: authUsersType = initialState, action: AuthActionType): authUsersType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.payload
            }
        }
        case 'SET-USER-DATA-NULL': {
            return {
                ...initialState
            }
        }
        default:
            return state
    }
}


export type AuthActionType = SetUserData | SetUserDataNULL
type SetUserData = ReturnType<typeof setAuthUserData>
type SetUserDataNULL = ReturnType<typeof setAuthUserDataNull>

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {userId, email, login, isAuth}
    } as const
}

export const setAuthUserDataNull = () => {
    return {
        type: 'SET-USER-DATA-NULL',
    } as const
}


export const getAuthUserData = () => async (dispatch: Dispatch<AuthActionType>) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let messages = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
        dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserDataNull())
    }
}