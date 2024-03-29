import axios from "axios";
import {ProfileDataFormType} from "components/Profile/ProfileInfo/ProfileDataForm";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '14389096-3138-44a4-a13b-8e136108be86'
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`, {}).then(response => response.data)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method profileApi object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`, {})
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image',photoFile)
        return instance.put(`/profile/photo`, formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileDataFormType) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email:string,password: string,rememberMe = false, captcha = null) {
      return instance.post('auth/login', {email,password,rememberMe,captcha})
    },
    logout(){
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    },
}




