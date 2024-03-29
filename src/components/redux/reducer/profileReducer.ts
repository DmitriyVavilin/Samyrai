import {AppDispatchType, AppThunk} from "../redux-store";
import {profileAPI} from "api/api";
import {ProfileDataFormType} from "components/Profile/ProfileInfo/ProfileDataForm";
import {stopSubmit} from "redux-form";

export type PostType = {
    id: number
    messages: string
    likesCount: number
}

export type StatePostType = {
    posts: PostType[]
    profile: ProfileType
    status: string
}

export type ProfileContactsType = {
    "facebook": string
    "website": null
    "vk": string
    "twitter": string
    "instagram": string
    "youtube": null,
    "github": string
    "mainLink": null
}

export type ProfilePhotosType = {
    "small": undefined | string
    "large": undefined | string
}

export type ProfileType = {
    "aboutMe": string
    contacts: ProfileContactsType
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": ProfilePhotosType
}

let initialState: StatePostType = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 100},
        {id: 2, messages: 'It`s my first post', likesCount: 150},
    ],
    profile: {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    status: ''
}

export const profileReducer = (state: StatePostType = initialState, action: ActionType): StatePostType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {id: 3, messages: action.newPostText, likesCount: 200}
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case 'SET-USERS-PROFILE': {
            return {...state, profile: action.payload}
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'DELETE-POST': {
            return {
                ...state, posts: state.posts.filter(el => el.id !== action.id)
            }
        }
        case 'SAVE-PHOTO-SUCCESS': {
            debugger
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case 'SAVE-PROFILE': {
            return  {
                ...state,
            }
        }
        default:
            return state
    }
}

type ActionType = AddPostCreator | SetUsersProfile | SetUserStatus | DeletePostAC | SavePhotoSuccess | SaveProfileAC
type AddPostCreator = ReturnType<typeof addPostAC>
type SetUsersProfile = ReturnType<typeof setUsersProfile>
type SetUserStatus = ReturnType<typeof setStatus>
type DeletePostAC = ReturnType<typeof deletePostAC>
type SavePhotoSuccess = ReturnType<typeof savePhotoSuccess>
type SaveProfileAC = ReturnType<typeof saveProfileAC>

export const deletePostAC = (id: number) => {
    return {
        type: 'DELETE-POST',
        id: id
    } as const
}

export const addPostAC = (newPostText: string) => {
    return (
        {
            type: 'ADD-POST',
            newPostText: newPostText
        } as const
    )
}
export const setUsersProfile = (profile: ProfileType) => {
    return (
        {
            type: 'SET-USERS-PROFILE',
            payload: profile
        } as const
    )
}
export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}

export const savePhotoSuccess = (photos: {
    small: undefined | string
    large: undefined | string
}) => ({
    type: 'SAVE-PHOTO-SUCCESS',
    photos
} as const)

export const saveProfileAC = (profile: ProfileDataFormType) => {
    return {
        type: 'SAVE-PROFILE',
        profile
    } as const
}

export const getUserProfile = (userId: string) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.getProfile(userId)
    dispatch(setUsersProfile(res.data))
}

export const getStatus = (userId: string) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))
}

export const updateStatus = (status: string) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0)
        dispatch(setStatus(status))
}

export const savePhoto = (file: File) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        debugger
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}

// export const _saveProfile = (profile: ProfileType):AppThunk =>  (dispatch: AppDispatchType) => {
//     const res = await profileAPI.saveProfile(profile)
//     if (res.data.resultCode === 0) {
//         dispatch(getUserProfile())
//     }
// }

    export const saveProfile = (profile: ProfileDataFormType): AppThunk => {
        return async (dispatch, getState) => {
            const userId = getState().authUsers.userId
            let res = await profileAPI.saveProfile(profile)
            if (res.data.resultCode === 0) {
                if (userId) {
                    dispatch(getUserProfile(userId.toString()))
                }
            } else {
                dispatch(stopSubmit("edit-profile", {_error : res.data.messages[0]}))
                return Promise.reject(res.data.messages[0])
            }
        }
    }